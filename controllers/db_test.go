package controllers

import (
	"testing"

	"github.com/jpoles1/root-cellar/envload"
	"github.com/jpoles1/root-cellar/logging"
)

func TestDBLoad(t *testing.T) {
	envConfig, err := envload.LoadEnv("../.env")
	logging.Fatal("Fetching env config", err)
	mc := MongoController{envConfig.MongoURI, "rootcellar-test", nil}
	mc.SessionClone()
}
