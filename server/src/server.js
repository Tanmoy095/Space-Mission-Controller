//server need to run backend different port
const http = require("http");
const app = require("./app.js");
const { loadPlanetsData } = require("./models/planets.model")
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {

  await loadPlanetsData();

  server.listen(PORT, () => {
      console.log(`Listening on port ${PORT}...`);
  });
}

startServer();