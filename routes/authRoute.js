const authRouter = require("express").Router();
const authController = require("../controllers/authController");

authRouter.post("/signup", authController.createUser);
authRouter.post("/login", authController.loginUser);

module.exports = authRouter;
