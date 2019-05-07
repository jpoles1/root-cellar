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
				r.Get("/new", apiHandler.GetNewRecipeID)
				r.Get("/{recipeID}", apiHandler.GetRecipeByID)
			})
		})
	})
	return r
}
