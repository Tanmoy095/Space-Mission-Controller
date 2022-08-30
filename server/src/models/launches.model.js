const launches = new Map();
let latestFlightNumber = 100;
const launch = {
  flightNumber: 100,
  misson: "Keplar Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27,2030"),
  target: "Keplar-442 b",
  customers: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

const getAllLaunches = () => {
  return Array.from(launches.values());
};

const addNewLaunch = (launch) => {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      upcoming: true,
      success: true,
      customers: ["ZERO T0 MAstery", "NASA"],
    })
  );
};

module.exports = {
  getAllLaunches,
  addNewLaunch,
};
