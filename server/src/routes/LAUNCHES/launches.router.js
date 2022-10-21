const express = require("express");

const {
  httpGetAllLaunces,
  httpAbortLaunch,
  httpAddNewLaunch,
} = require("./launches.controller");
const launchesRouter = express.Router();

launchesRouter.get("/", httpGetAllLaunces);
launchesRouter.post("/", httpAddNewLaunch);
launchesRouter.delete("/:id", httpAbortLaunch);

module.exports = launchesRouter;
