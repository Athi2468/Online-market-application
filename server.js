#!/usr/bin/env node

/**
 * Module dependencies.
 */

let configDB = require("./config/db");
let app = require("./config/express");
let debug = require("debug")("myapp:server");
let http = require("http");


let port = normalizePort(process.env.PORT || "3000");
app.set("port", port);


var db = configDB();
let server = http.createServer(app);

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  let bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

}

function onListening() {
  let addr = server.address();
  let bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}
