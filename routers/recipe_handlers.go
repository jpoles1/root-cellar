package routers

import (
	"net/http"

	"github.com/globalsign/mgo/bson"
	"github.com/go-chi/chi"
	"github.com/go-chi/jwtauth"
)

//GetNewRecipeID handles a request to GET the ID for a newly created recipe
func (h APIHandler) GetNewRecipeID(w http.ResponseWriter, r *http.Request) {
	_, claims, _ := jwtauth.FromContext(r.Context())
	newRecipeID := bson.NewObjectId()
	ce := h.Controller.CreateRecipe(newRecipeID, bson.ObjectIdHex(claims["id"].(string)))
	if ce.HasErrors() {
		handleControllerErrors(w, 500, "Cannot create new recipe", ce)
		return
	}
	sendResponseJSON(w, map[string]interface{}{
		"recipeID": newRecipeID,
	})
}

//GetRecipeByID handles a request to GET recipe data for a given ID
func (h APIHandler) GetRecipeByID(w http.ResponseWriter, r *http.Request) {
	recipeID := chi.URLParam(r, "recipeID")
	if !bson.IsObjectIdHex(recipeID) {
		sendErrorCode(w, 400, "Invalid recipe ID", nil)
		return
	}
	recipe, ce := h.Controller.FindRecipeByID(bson.ObjectIdHex(recipeID))
	if ce.HasErrors() {
		handleControllerErrors(w, 500, "Cannot retreive recipe with this ID", ce)
		return
	}
	sendResponseJSON(w, recipe)
}
