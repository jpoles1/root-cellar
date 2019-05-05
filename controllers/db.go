package controllers

import (
	"root-cellar/logging"
	"time"

	mgo "gopkg.in/mgo.v2"
)

func mongoConnect(mc *MongoController) {
	newSession, err := mgo.DialWithTimeout(mc.MongoURI, 500*time.Millisecond)
	if err != nil {
		logging.Error("Connecting to MongoDB", err)
	}
	mc.DBSession = newSession
}
