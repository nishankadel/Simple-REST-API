const express = require("express");
require("./db");
const router = require("./router");

const app = express();

const port = process.eventNames.PORT || 8000;
const host = "127.0.0.1";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.listen(port, host, () =>
  console.log(`Server listening at http://${host}:${port}/`)
);
