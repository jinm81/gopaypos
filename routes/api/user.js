const router = require("express").Router();
const authControl = require("../../controllers/authController");

// Match "/api/user/login/"
router.route("/login").post(authControl.login);

// Match "/api/user/register/"
router.route("/register").post(authControl.register);

module.exports = router;