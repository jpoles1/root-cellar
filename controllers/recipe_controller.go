package controllers

import (
	"root-cellar/models"

	mgo "github.com/globalsign/mgo"
	"github.com/globalsign/mgo/bson"
)

//CreateRecipe runs a DB query to fetch a users document with a given ID
func (mc MongoController) CreateRecipe(recipeID bson.ObjectId, userID bson.ObjectId) (ce ControllerError) {
	var mongoConn *mgo.Session
	mongoConn, ce.DBError = mc.SessionClone()
	defer mongoConn.Close()
	if ce.DBError != nil {
		return
	}
	newRecipe := models.Recipe{
		ID:     recipeID,
		UserID: userID,
	}
	collection := mongoConn.DB(mc.DBName).C("recipes")
	ce.DBError = collection.Insert(newRecipe)
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
