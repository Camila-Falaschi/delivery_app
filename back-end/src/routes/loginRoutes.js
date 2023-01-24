const { Router } = require("express");
const loginController = require("../controller/loginController");
require("express-async-errors");

const {
  validateLoginInputs,
} = require("../middlewares/credentialsValidations");

const routes = Router();

routes.use(validateLoginInputs);
routes.post("/", loginController.postLogin);

module.exports = routes;
