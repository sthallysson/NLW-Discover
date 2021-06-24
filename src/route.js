const express = require("express");
const QuestionController = require("./controllers/QuestionController");

const route = express.Router();

route.get("/", (req, res) => res.render("index"));
route.get("/room-empty", (req, res) => res.render("room-empty"));
route.get("/room", (req, res) => res.render("room"));
route.get("/create-pass", (req, res) => res.render("create-pass"));

//formato que o formulario de dentro da modal tem que passar imformação
route.post("/room/:room/:question/:action", QuestionController.index);

module.exports = route;
