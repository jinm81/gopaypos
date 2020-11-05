const router = require("express").Router();
const userRoutes = require("./user");

// Match "/api/user/"
router.use("/user", userRoutes);

module.exports = router;