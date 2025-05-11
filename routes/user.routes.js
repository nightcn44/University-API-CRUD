const express = require("express");
const router = express.Router();
const user = require("../controllers/user.controllers");

router.post("/user", user.createUser);
// router.get("/ur", user.getAllUsers);
// router.get("/ur/:id", user.getUserById);
// router.put("/ur/:id", user.updateUserById);
// router.delete("/ur/:id", user.deleteUserById);

module.exports = router;
