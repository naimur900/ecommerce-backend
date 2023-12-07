const router = require("express").Router()
const authController = require("../controllers/authController")



router.post("/signup", authController.createUser)
router.post("/login",authController.loginUser)

module.exports = router
