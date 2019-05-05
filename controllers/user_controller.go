package controllers

import (
	"root-cellar/models"

	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

//AddUser runs a DB query to produce a new document in the users collection
func (mc MongoController) AddUser(newUser models.User) (ce ControllerError) {
	var mongoConn *mgo.Session
	mongoConn, ce.DBError = mc.SessionClone()
	defer mongoConn.Close()
	if ce.DBError != nil {
		return
	}
	collection := mongoConn.DB(mc.DBName).C("users")
	ce.APIError = collection.Insert(&newUser)
	return
}

//AcceptTOS will set the acceptedTOS value to true for a given userID
func (mc MongoController) AcceptTOS(userID bson.ObjectId) (ce ControllerError) {
	var mongoConn *mgo.Session
	mongoConn, ce.DBError = mc.SessionClone()
	defer mongoConn.Close()
	if ce.DBError != nil {
		return
	}
	userCollection := mongoConn.DB(mc.DBName).C("users")
	ce.APIError = userCollection.UpdateId(userID, bson.M{"$set": bson.M{"acceptedTOS": true}})
	if ce.APIError != nil {
		return
	}
	signatureCollection := mongoConn.DB(mc.DBName).C("signatures")
	ce.APIError = signatureCollection.Insert(models.ContractSignature{
		ID:            bson.NewObjectId(),
		UserID:        userID,
		SignatureType: "TOS",
	})
	return
}

//FindUserByEmail searches the DB for users with a given email address
func (mc MongoController) FindUserByEmail(email string) (userList []models.User, ce ControllerError) {
	var mongoConn *mgo.Session
	mongoConn, ce.DBError = mc.SessionClone()
	defer mongoConn.Close()
	if ce.DBError != nil {
		return
	}
	searchParams := bson.M{"email": email}
	collection := mongoConn.DB(mc.DBName).C("users")
	ce.APIError = collection.Find(searchParams).All(&userList)
	return
}

//FetchUserList runs a DB query to fetch a list of users matching the bson.M search params
func (mc MongoController) FetchUserList(searchParams bson.M) (result []models.User, ce ControllerError) {
	var mongoConn *mgo.Session
	mongoConn, ce.DBError = mc.SessionClone()
	defer mongoConn.Close()
	if ce.DBError != nil {
		return
	}
	collection := mongoConn.DB(mc.DBName).C("users")
	ce.APIError = collection.Find(searchParams).Sort("-_id").All(&result)
	return
}

//FindUserByID runs a DB query to fetch a users document with a given ID
func (mc MongoController) FindUserByID(userID bson.ObjectId) (result *models.User, ce ControllerError) {
	var mongoConn *mgo.Session
	mongoConn, ce.DBError = mc.SessionClone()
	defer mongoConn.Close()
	if ce.DBError != nil {
		return
	}
	collection := mongoConn.DB(mc.DBName).C("users")
	ce.APIError = collection.FindId(userID).One(&result)
	return
}

//FindUserByPublicID runs a DB query to fetch a users document with a given PublicID
func (mc MongoController) FindUserByPublicID(publicID models.PubID) (result *models.User, ce ControllerError) {
	var mongoConn *mgo.Session
	mongoConn, ce.DBError = mc.SessionClone()
	defer mongoConn.Close()
	if ce.DBError != nil {
		return
	}
	collection := mongoConn.DB(mc.DBName).C("users")
	ce.APIError = collection.Find(bson.M{"pid": publicID}).One(&result)
	return
}

//UpdateUserByID runs a DB query to update a user's profile using their UID
func (mc MongoController) UpdateUserByID(updatedUser models.User) (ce ControllerError) {
	var mongoConn *mgo.Session
	mongoConn, ce.DBError = mc.SessionClone()
	defer mongoConn.Close()
	if ce.DBError != nil {
		return
	}
	collection := mongoConn.DB(mc.DBName).C("users")
	collection.UpdateId(updatedUser.ID, updatedUser)
	return
}

//FetchProfileInfo will retreive an ProfileInfo for a given user ID
func (mc MongoController) FetchProfileInfo(userID bson.ObjectId) (profile models.ProfileInfo, ce ControllerError) {
	var mongoConn *mgo.Session
	mongoConn, ce.DBError = mc.SessionClone()
	defer mongoConn.Close()
	if ce.DBError != nil {
		return
	}
	collection := mongoConn.DB(mc.DBName).C("users")
	var userEntry models.User
	ce.APIError = collection.FindId(userID).One(&userEntry)
	profile = models.ProfileInfo{
		PublicID: userEntry.PublicID,
		Username: userEntry.Username,
	}
	return
}

//FetchProfileInfoList will retreive a list of ProfileInfos for a list of user IDs
func (mc MongoController) FetchProfileInfoList(userIDList []bson.ObjectId) (profileList []models.ProfileInfo, ce ControllerError) {
	var mongoConn *mgo.Session
	mongoConn, ce.DBError = mc.SessionClone()
	defer mongoConn.Close()
	if ce.DBError != nil {
		return
	}
	collection := mongoConn.DB(mc.DBName).C("users")
	var userList []models.User
	ce.APIError = collection.Find(bson.M{
		"_id": bson.M{"$in": userIDList},
	}).All(&userList)
	for _, userEntry := range userList {
		profileList = append(profileList, models.ProfileInfo{
			PublicID: userEntry.PublicID,
			Username: userEntry.Username,
		})
	}
	return
}
