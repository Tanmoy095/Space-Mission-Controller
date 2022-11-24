//server need to run backend different port
const http = require("http");
const mongoose = require("mongoose");
const app = require("./app.js");
const { loadPlanetsData } = require("./models/planets.model");
const PORT = process.env.PORT || 8000;

const MONGO_URL =
  "mongodb+srv://nasa-api:7h7BMlcp6fpHAAjI@nasacluster.1adg8fw.mongodb.net/nasa?retryWrites=true&w=majority";

const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("MongoDb connection is ready");
});
mongoose.connection.on("error", (error) => {
  console.log(error);
});
const startServer = async () => {
  await mongoose.connect(
    MONGO_URL,
    {
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
    },
    (err) => {
      if (err) throw err;
    }
  );
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
};

startServer();
