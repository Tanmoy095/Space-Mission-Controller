const express = require("express");

const {
  httpGetAllLaunces,
  httpAddNewLaunch,
} = require("./launches.controller");
const launchesRouter = express.Router();

launchesRouter.get("/", httpGetAllLaunces);
launchesRouter.post("/", httpAddNewLaunch);

module.exports = launchesRouter;
