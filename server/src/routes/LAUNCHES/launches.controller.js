const { getAllLaunches, addNewLaunch } = require("../../models/launches.model");

const httpGetAllLaunces = (req, res) => {
  return res.status(200).json(getAllLaunches());
};
const httpAddNewLaunch = (req, res) => {
  const launch = req.body;
  if (
    !launch.misson ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({
      error: "Missing requirred launch property",
    });
  }
  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "Invalid Launch Date",
    });
  }
  addNewLaunch(launch);
  return res.status(201).json(launch);
};
module.exports = {
  httpGetAllLaunces,
  httpAddNewLaunch,
};
