const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connection = require("./Connection");
const employeeRouter = require("./Routes/Employee");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/employee", employeeRouter);

module.exports = app;
