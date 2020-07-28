const express = require("express");
const router = express.Router();

const user = require("../controller/user");
const player = require("../controller/player");

router.get("/", user.home);
router.post("/user-login", user.userLogedIn);// check if user is login

// auth
router.post("/register", user.register);
router.post("/login", user.login);
router.post("/logout", user.logout);

// player collection
router.post("/createPlayer-30sec", player.createPlayer30Sec);
router.post("/createPlayer-2mn", player.createPlayer2Mn);
router.post("/createPlayer-10mn", player.createPlayer10Mn);

router.get("/readPlayer-30sec", player.readPlayer30Sec);
router.get("/readPlayer-2mn", player.readPlayer2Mn);
router.get("/readPlayer-10mn", player.readPlayer10Mn);

module.exports = router;