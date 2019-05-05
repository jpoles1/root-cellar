package models

import "gopkg.in/mgo.v2/bson"

//ContractSignature records are produced every time a user agrees to a contract
type ContractSignature struct {
	ID            bson.ObjectId `bson:"_id,omitempty" json:"id"`
	UserID        bson.ObjectId `bson:"uid" json:"uid"`
	SignatureType string        `bson:"signatureType" json:"signatureType"`
}
