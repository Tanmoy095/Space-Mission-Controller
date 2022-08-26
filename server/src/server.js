//server need to run backend different port
const http = require("http");
const app = require("./app.js");
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}...`);
});
