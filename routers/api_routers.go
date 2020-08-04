package routers

import (
	"github.com/go-chi/chi"
	"github.com/go-chi/jwtauth"
)

//APIRouter controls traffic to all API endpoints
func APIRouter(r chi.Router, apiHandler APIHandler) chi.Router {
	//Route requests
	r.Route("/auth/", func(r chi.Router) {
		r.Get("/{provider}", apiHandler.AuthRedirect)
		r.Get("/{provider}/callback", apiHandler.GocialCallback)
	})
	r.Group(func(r chi.Router) {
		r.Use(jwtauth.Verifier(jwtAuthConfig))
		r.Use(apiHandler.Authenticator)
		//r.Get("/acceptTOS", apiHandler.GetAcceptTOS)
		r.Group(func(r chi.Router) {
			//r.Use(apiHandler.TOSWall)
			r.Route("/recipe/", func(r chi.Router) {
				r.Get("/list", apiHandler.GetMyRecipeList)
				r.Get("/new", apiHandler.GetNewRecipeID)
				r.Post("/import", apiHandler.PostImportRecipe)
				r.Get("/{recipeID}/fork", apiHandler.GetForkRecipeByID)
				r.Post("/{recipeID}/update", apiHandler.PostUpdateRecipe)
			})
		})
	})
	//Allow recipes to be viewed even if not logged in
	r.Get("/recipe/{recipeID}/view", apiHandler.GetRecipeByID)
	return r
}
