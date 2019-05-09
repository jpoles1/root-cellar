package routers

import (
	"encoding/json"
	"net/http"
	"root-cellar/models"

	"github.com/globalsign/mgo/bson"
	"github.com/go-chi/chi"
	"github.com/go-chi/jwtauth"
)

//PostFetchRecipeList handles a POST request with recipe search params
func (h APIHandler) PostFetchRecipeList(w http.ResponseWriter, r *http.Request) {
	/*
		_, claims, _ := jwtauth.FromContext(r.Context())
		var searchParams recipeSearch
		err := json.NewDecoder(r.Body).Decode(&recipeData)
		if err != nil {
			sendErrorCode(w, 400, "Attempting to decode request body json", err)
			return
		}
	*/
	recipeList, ce := h.Controller.RecipeSearch(bson.M{})
	if ce.HasErrors() {
		handleControllerErrors(w, 500, "Failed to execute recipe search", ce)
		return
	}
	sendResponseJSON(w, recipeList)
}

//GetNewRecipeID handles a request to GET the ID for a newly created recipe
func (h APIHandler) GetNewRecipeID(w http.ResponseWriter, r *http.Request) {
	_, claims, _ := jwtauth.FromContext(r.Context())
	newRecipeID := bson.NewObjectId()
	recipeData := models.Recipe{
		ID:     newRecipeID,
		UserID: bson.ObjectIdHex(claims["id"].(string)),
	}
	ce := h.Controller.UpsertRecipe(recipeData)
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

//PostImportRecipe handles a request to POST newly imported recipe data
func (h APIHandler) PostImportRecipe(w http.ResponseWriter, r *http.Request) {
	_, claims, _ := jwtauth.FromContext(r.Context())
	var recipeData models.Recipe
	err := json.NewDecoder(r.Body).Decode(&recipeData)
	if err != nil {
		sendErrorCode(w, 400, "Attempting to decode request body json", err)
		return
	}
	recipeData.ID = bson.NewObjectId()
	recipeData.UserID = bson.ObjectIdHex(claims["id"].(string))
	ce := h.Controller.UpsertRecipe(recipeData)
	if ce.HasErrors() {
		handleControllerErrors(w, 500, "Cannot import recipe", ce)
		return
	}
	sendResponseJSON(w, map[string]interface{}{
		"recipeID": recipeData.ID,
	})
}

//PostUpdateRecipe handles a request to POST updated recipe data
func (h APIHandler) PostUpdateRecipe(w http.ResponseWriter, r *http.Request) {
	_, claims, _ := jwtauth.FromContext(r.Context())
	recipeID := chi.URLParam(r, "recipeID")
	if !bson.IsObjectIdHex(recipeID) {
		sendErrorCode(w, 400, "Invalid recipe ID", nil)
		return
	}
	var recipeData models.Recipe
	err := json.NewDecoder(r.Body).Decode(&recipeData)
	if err != nil {
		sendErrorCode(w, 400, "Attempting to decode request body json", err)
		return
	}
	if recipeData.ID != bson.ObjectIdHex(recipeID) {
		sendErrorCode(w, 400, "Recipe ID does not match updated data", nil)
		return
	}
	if recipeData.UserID != bson.ObjectIdHex(claims["id"].(string)) {
		sendErrorCode(w, 401, "Case update not permitted.", nil)
		return
	}
	ce := h.Controller.UpsertRecipe(recipeData)
	if ce.HasErrors() {
		handleControllerErrors(w, 500, "Cannot update recipe", ce)
		return
	}
	sendResponseJSON(w, map[string]interface{}{
		"recipeID": recipeData.ID,
	})
}