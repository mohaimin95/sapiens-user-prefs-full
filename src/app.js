const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes = require("./routes/index");
const path = require("path")

const app = express();
console.log((path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../public")))
app.use(cors({
    credentials: true,
    origin: process.env.APP_ORIGIN
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api", routes)

module.exports = app;