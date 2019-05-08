package controllers

import (
	"root-cellar/models"

	mgo "github.com/globalsign/mgo"
	"github.com/globalsign/mgo/bson"
)

//UpsertRecipe runs a DB query to create or update a recipe document
func (mc MongoController) UpsertRecipe(recipe models.Recipe) (ce ControllerError) {
	var mongoConn *mgo.Session
	mongoConn, ce.DBError = mc.SessionClone()
	defer mongoConn.Close()
	if ce.DBError != nil {
		return
	}
	collection := mongoConn.DB(mc.DBName).C("recipes")
	_, ce.APIError = collection.UpsertId(recipe.ID, recipe)
	return
}

//RecipeSearch connects to Mongo and fetches any cases matching the bson.M search params
func (mc MongoController) RecipeSearch(searchParams bson.M) (recipeList []models.Recipe, ce ControllerError) {
	var mongoConn *mgo.Session
	mongoConn, ce.DBError = mc.SessionClone()
	defer mongoConn.Close()
	if ce.DBError != nil {
		return
	}
	collection := mongoConn.DB(mc.DBName).C("recipes")
	collection.Find(searchParams).Sort("-_id").All(&recipeList)
	return
}

//FindRecipeByID runs a DB query to fetch a users document with a given ID
func (mc MongoController) FindRecipeByID(recipeID bson.ObjectId) (result *models.Recipe, ce ControllerError) {
	var mongoConn *mgo.Session
	mongoConn, ce.DBError = mc.SessionClone()
	defer mongoConn.Close()
	if ce.DBError != nil {
		return
	}
	collection := mongoConn.DB(mc.DBName).C("recipes")
	ce.APIError = collection.FindId(recipeID).One(&result)
	return
}
