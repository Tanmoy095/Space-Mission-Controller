const express = require("express");
//express.router??
const planetsRouter = express.Router();
const { httpGetAllPlanets } = require("./planets.controller");

planetsRouter.get("/", httpGetAllPlanets);

module.exports = planetsRouter;
