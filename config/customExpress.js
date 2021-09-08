const express = require("express");
const consign = require("consign"); //biblioteca que agrupa/organiza as rotas
const bodyParser = require("body-parser");

module.exports = () => {
  const app = express();

  app.use(bodyParser.json())

  //chamar a função consign
  consign()
    .include("controllers") //inclui as rotas que estão dentro da pasta controllers
    .into(app); // para dentro da const app

  return app;
};
