package models

import "github.com/globalsign/mgo/bson"

//PubID is a an externally facing unique identifier for a user
type PubID string

//User stores data regarding a user of the system, and also their login provider.
type User struct {
	ID           bson.ObjectId `bson:"_id,omitempty" json:"id"`
	PublicID     PubID         `bson:"pid" json:"pid"`
	Username     string        `bson:"uname" json:"uname"`
	FullName     string        `bson:"fullName" json:"fullName"`
	Email        string        `bson:"email" json:"email"`
	AuthProvider string        `bson:"authProvider" json:"auth_provider"`
	IsAdmin      bool          `bson:"isAdmin" json:"is_admin"`
	IsOwner      bool          `bson:"isOwner" json:"is_owner"`
	AcceptedTOS  bool          `bson:"acceptedTOS" json:"accepted_tos"`
}
