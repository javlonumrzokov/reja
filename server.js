const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://Javlon1992:ujavlon$1992@cluster0.fjpdg.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection with MongoDB");
    else {
      console.log("MongoDB connection is successfull");
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 7010;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
