const express = require("express");

const router = express.Router();
const { handleUserLogin, handleUserRegister } = require("../Controllers/user");

router.post("/", handleUserRegister);
router.post("/login", handleUserLogin);
module.exports = router;
