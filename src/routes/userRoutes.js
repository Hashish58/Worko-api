const express = require("express");
const userController = require("../controllers/userController"); // Ensure the path is correct

const router = express.Router();

router.get("/worko/user", userController.getUsers);
router.get("/worko/user/:userId", userController.getUserById);
router.post("/worko/user", userController.createUser);
router.put("/worko/user/:userId", userController.updateUser);
router.patch("/worko/user/:userId", userController.updateUser);
router.delete("/worko/user/:userId", userController.deleteUser);

module.exports = router;
