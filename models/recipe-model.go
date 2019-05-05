package models

import "gopkg.in/mgo.v2/bson"

//Recipe contains data regarding a recipe for a certain dish
type Recipe struct {
	ID     bson.ObjectId `bson:"_id,omitempty" json:"id"`
	UserID bson.ObjectId `bson:"uid" json:"uid"`
	Name   string        `bson:"name" json:"name"`
	Desc   string        `bson:"desc" json:"desc"`
}
