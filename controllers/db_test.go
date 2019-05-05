package controllers

import (
	"root-cellar/envload"
	"root-cellar/logging"
	"testing"
)

func TestDBLoad(t *testing.T) {
	envConfig, err := envload.LoadEnv("../.env")
	logging.Fatal("Fetching env config", err)
	mc := MongoController{envConfig.MongoURI, "rootcellar-test", nil}
	mc.SessionClone()
}
