package models

import (
	"time"

	"github.com/globalsign/mgo/bson"
)

//Ingredient stores data for an amount of an ingredient
type Ingredient struct {
	Quantity   float32 `bson:"quantity" json:"quantity"`
	Unit       string  `bson:"unit" json:"unit"`
	Ingredient string  `bson:"ingredient" json:"ingredient"`
}

//Instruction stores data for a step in a recipe
type Instruction struct {
	Instruction string        `bson:"instruction" json:"instruction"`
	Duration    time.Duration `bson:"duration" json:"duration"`
}

//Recipe contains data regarding a recipe for a certain dish
type Recipe struct {
	ID           bson.ObjectId `bson:"_id,omitempty" json:"id"`
	UserID       bson.ObjectId `bson:"uid" json:"uid"`
	Name         string        `bson:"name" json:"name"`
	Desc         string        `bson:"desc" json:"desc"`
	Ingredients  []Ingredient  `bson:"ingredients" json:"ingredients"`
	Instructions []Instruction `bson:"instructions" json:"instructions"`
	ActiveTime   time.Duration `bson:"activeTime" json:"activeTime"`
	TotalTime    time.Duration `bson:"totalTime" json:"totalTime"`
}
