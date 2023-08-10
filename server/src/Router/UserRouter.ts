import express from "express";
const {
    createUser, updateUser, getUser, getAllUsers, getUserById, deleteUser
} = require("../Controllers/UserController");
const router = express.Router();

// these are the controllers
// we will create all of them in future


//params
// it will fetch the value from the url
router.param("userId", getUserById);

// to get all the users
router.get("/users/", getAllUsers);

// to get a single user
router.get("/user/:userId", getUser);

// to create a user
router.post("/user/create/", createUser);

// to update the user
router.put("/update_user/:userId", updateUser);

// to delete the user
router.delete("/delete_user/:userId", deleteUser);

// we will export the router to import it in index.js
module.exports = router;