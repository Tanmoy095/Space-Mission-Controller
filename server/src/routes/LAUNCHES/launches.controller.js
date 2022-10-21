const {
  getAllLaunches,
  addNewLaunch,
  abortLaunchById,
  existLaunchWithId,
} = require("../../models/launches.model");

const httpGetAllLaunces = (req, res) => {
  return res.status(200).json(getAllLaunches());
};
//

const httpAddNewLaunch = (req, res) => {
  const launch = req.body;
  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({
      error: "Missing requirred launch property",
    });
  }
  launch.launchDate = new Date(launch.launchDate);
  //NaN = not a number
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "Invalid Launch Date",
    });
  }
  addNewLaunch(launch);
  return res.status(201).json(launch);
};
const httpAbortLaunch = (req, res) => {
  //we will take the id from users request
  const launchId = +req.params.id;
  //if launche id doesnot exist return 404
  if (!existLaunchWithId(launchId)) {
    return res.status(404).json({
      error: "Launch not found",
    });
  }
  const aborted = abortLaunchById(launchId);
  return res.status(200).json(aborted);
};
module.exports = {
  httpGetAllLaunces,
  httpAddNewLaunch,
  httpAbortLaunch,
};
