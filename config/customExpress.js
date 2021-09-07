const express = require("express");
const consign = require("consign"); //biblioteca que agrupa/organiza as rotas

module.exports = () => {
  const app = express();

  //chamar a função consign
  consign()
    .include("controllers") //inclui as rotas que estão dentro da pasta controllers
    .into(app); // para dentro da const app

  return app;
};
