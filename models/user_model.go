package models

import (
	"gopkg.in/mgo.v2/bson"
)

//PubID is a hash which serves as a user's publicly facing ID
type PubID string

//User stores data regarding a user of the system, and also their login provider.
type User struct {
	ID            bson.ObjectId `bson:"_id,omitempty" json:"id"`
	PublicID      PubID         `bson:"pid" json:"pid"`
	Username      string        `bson:"uname" json:"uname"`
	FullName      string        `bson:"fullName" json:"fullName"`
	LoginFullName string        `bson:"loginFullName" json:"loginFullName"` //stores a user's full name as provided by their auth service
	Email         string        `bson:"email" json:"email"`
	AuthProvider  string        `bson:"authProvider" json:"authProvider"`
	IsPremium     bool          `bson:"isPremium" json:"isPremium"`
	IsAdmin       bool          `bson:"isAdmin" json:"isAdmin"`
	IsOwner       bool          `bson:"isOwner" json:"isOwner"`
	AcceptedTOS   bool          `bson:"acceptedTOS" json:"acceptedTOS"`
}

//ProfileInfo stores public data regarding a case's author
type ProfileInfo struct {
	PublicID PubID  `json:"pid"`
	Username string `json:"uname"`
}
