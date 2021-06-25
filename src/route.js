const express = require("express");
const QuestionController = require("./controllers/QuestionController");
const RoomController = require("./controllers/RoomController");

const route = express.Router();

route.get("/", (req, res) => res.render("index", { page: "enter-room" }));
route.get("/create-pass", (req, res) =>
  res.render("index", { page: "create-pass" })
);

route.get("/room-empty/:room", (req, res) => res.render("room-empty"));
route.get("/room", (req, res) => res.render("room"));

//formato que o formulario de dentro da modal tem que passar imformação
route.post("/question/:room/:question/:action", QuestionController.index);
route.post("/create-room", RoomController.create);

module.exports = route;
