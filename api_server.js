// requires
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const pokemons = require("./api/30.json");
const types = require("./api/type.json");
const abilities = require("./api/abilities.json");
const generations = require("./api/generations.json");

let port = process.env.PORT || 3000;

app.get("/pokemon/:val", (req, res) => {
  let result = pokemons.filter(
    (pok) => pok.name === req.params.val || pok.id == req.params.val
  );
  res.json(result[0]);
});

app.get("/type/:val", (req, res) => {
  let result = types.filter((type) => type.name === req.params.val);
  res.json(result[0]);
});

app.get("/ability/:val", (req, res) => {
  let result = abilities.filter((able) => able.name === req.params.val);
  res.json(result[0]);
});

app.get("/generation/:val", (req, res) => {
  res.json(generations);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`API Server active on port ${port}!`);
  }
});
