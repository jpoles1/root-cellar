package controllers

import (
	"github.com/jpoles1/root-cellar/models"

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

//UpsertRecipe runs a DB query to create or update a recipe document
func (mc MongoController) DeleteRecipe(recipeID bson.ObjectId) (ce ControllerError) {
	var mongoConn *mgo.Session
	mongoConn, ce.DBError = mc.SessionClone()
	defer mongoConn.Close()
	if ce.DBError != nil {
		return
	}
	collection := mongoConn.DB(mc.DBName).C("recipes")
	ce.APIError = collection.RemoveId(recipeID)
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

type TreeNode struct {
	Recipe   models.Recipe `json:"recipe"`
	Children []TreeNode    `json:"children"`
}

func (mc MongoController) FindRecipeChildren(recipeID bson.ObjectId) (result []*models.Recipe, ce ControllerError) {
	var mongoConn *mgo.Session
	mongoConn, ce.DBError = mc.SessionClone()
	defer mongoConn.Close()
	if ce.DBError != nil {
		return
	}
	collection := mongoConn.DB(mc.DBName).C("recipes")
	//Find children
	ce.APIError = collection.Find(bson.M{"parent_id": recipeID, "_id": bson.M{"$ne": recipeID}}).All(&result)
	return
}

func (mc MongoController) FindRecipeChildrenTree(recipeID bson.ObjectId, max_depth int) (result TreeNode, ce ControllerError) {
	recipe, ce := mc.FindRecipeByID(recipeID)
	if ce.FirstError() != nil {
		return
	}
	children, ce := mc.FindRecipeChildren(recipeID)
	child_nodes := []TreeNode{}
	if len(children) > 0 && max_depth > 0 {
		for _, child := range children {
			var grand_child TreeNode
			grand_child, ce = mc.FindRecipeChildrenTree(child.ID, max_depth-1)
			if ce.FirstError() != nil {
				return
			}
			child_nodes = append(child_nodes, grand_child)

		}
	}
	node := TreeNode{*recipe, child_nodes}
	result = node
	return
}
