import { NextFunction } from "express";

const User = require("../models/User");

export const getUserById = async (req: any, res: any, next: NextFunction, userId: string) => {
    try {
        const user = await User.findById(userId).exec();

        if (!user) {
            return res.status(404).json({
                error: "User not found",
            });
        }

        req.user = user;
        next();
    } catch (err) {
        return res.status(500).json({
            error: "Internal server error",
        });
    }
};

//@ts-ignore
exports.getAllUsers = async (req: any, res: any, next: any) => {
    try {
        const users = await User.find().sort("-createdAt").exec();
        res.json(users);
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block error");
    }
};


exports.getUser = (req: any, res: any) => {
    // req.User is set by the getUserById middleware
    return res.json(req.user);
};

exports.createUser = async (req: any, res: any) => {
    try {
        // Get JSON data from the frontend i.e., req.body
        const user = new User(req.body);

        // Create a User instance by passing data from req.body
        const savedUser = await user.save();
        res.json({ user: savedUser });
    } catch (err) {
        return res.status(400).json({
            error: err.message,
        });
    }
};

exports.updateUser = async (req: any, res: any) => {
    try {
        // Take req.user from getUserById() middleware
        const user = req.user;

        // Update user fields
        user.name = req.body.name;
        user.password = req.body.password;
        user.email = req.body.email;

        // Save the updated User
        const updatedUser = await user.save();

        // Send the updated User as a JSON response
        res.json(updatedUser);
    } catch (err) {
        return res.status(400).json({
            error: err.message,
        });
    }
};

export const deleteUser = async (req: any, res: any) => {
    try {
        const user = req.user;

        // Remove the user
        await User.deleteOne({ _id: user._id });

        // Send deleted User and success message as a JSON response
        res.json({
            user_deleted: user,
            message: "User deleted successfully!",
        });
    } catch (err) {
        return res.status(400).json({
            error: err.message,
        });
    }
};
