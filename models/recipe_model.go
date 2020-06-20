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
	Notes      string  `bson:"notes" json:"notes"`
}

//Instruction stores data for a step in the recipe
type Instruction struct {
	Instruction string        `bson:"instruction" json:"instruction"`
	Duration    time.Duration `bson:"duration" json:"duration"`
	Optional    bool          `bson:"optional" json:"optional"`
}

//Recipe contains data regarding a recipe for a certain dish
type Recipe struct {
	ID           bson.ObjectId `bson:"_id,omitempty" json:"id"`
	UserID       bson.ObjectId `bson:"uid" json:"uid"`
	OriginalID   bson.ObjectId `bson:"og_id" json:"og_id"`
	ParentID     bson.ObjectId `bson:"parent_id" json:"parent_id"`
	Name         string        `bson:"name" json:"name"`
	Desc         string        `bson:"desc" json:"desc"`
	Ingredients  []Ingredient  `bson:"ingredients" json:"ingredients"`
	Instructions []Instruction `bson:"instructions" json:"instructions"`
	Servings     string        `bson:"servings" json:"servings"`
	ActiveTime   time.Duration `bson:"activeTime" json:"active_time"`
	TotalTime    time.Duration `bson:"totalTime" json:"total_time"`
	Tags         []string      `bson:"tags" json:"tags"`
	URL          string        `bson:"url" json:"url"`
	Archived     bool          `bson:"archived" json:"archived"`
	LastUpdated  time.Time     `bson:"last_updated" json:"last_updated"`
}
