import { NextFunction } from "express";
import multer from 'multer';

const User = require("../models/User");
const imgStorage = multer.diskStorage({
    //@ts-ignore
    destination: function (req, file, cb) {
        cb(null, 'imgs/avatars'); // Define where to store the avatar files
    },
    //@ts-ignore
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const fileExtension = file.originalname.split('.').pop();
        cb(null, 'avatar-' + uniqueSuffix + '.' + fileExtension);
    }
});

// Initialize Multer for avatar uploads
const uploadAvatar = multer({ storage: imgStorage }).single('avatar');


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

        console.log('Users: ', users);
        const avatarBaseURL = 'http://localhost:8000/imgs/avatars';
        // Modify each user to include the avatar URL
        const usersWithAvatars = users.map((user: any) => {
            // Construct the avatar URL based on the filename
            console.log('user: ', user);

            let avatarURL: any;
            if (user.avatar) {
                avatarURL = `${avatarBaseURL}/${user.avatar}`;
            } else {
                avatarURL = null;
            }

            // Include the avatar URL in the user data
            return {
                ...user.toObject(),
                avatarURL: avatarURL
            };
        });

        res.json(usersWithAvatars);
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block error");
    }
};


exports.getUser = (req: any, res: any) => {
    // req.User is set by the getUserById middleware
    return res.json(req.user);
};

export const createUser = async (req: any, res: any) => {
    try {
        // Use Multer middleware to handle avatar upload
        uploadAvatar(req, res, async function (err) {
            if (err) {
                return res.status(400).json({
                    error: 'Avatar upload error: ' + err.message
                });
            }

            // Get JSON data from the frontend i.e., req.body
            const { name, email, password }: any = req.body;

            // Create a User instance by passing data from req.body
            const user = new User({
                name,
                email,
                password,
                avatar: req.file ? req.file.filename : '' // Set avatar filename if uploaded
            });

            const savedUser = await user.save();
            res.json({ user: savedUser });
        });
    } catch (err) {
        return res.status(400).json({
            error: err.message
        });
    }
};
export const updateUser = async (req: any, res: any) => {
    try {
        // Use Multer middleware to handle avatar upload
        uploadAvatar(req, res, async function (err) {
            if (err) {
                return res.status(400).json({
                    error: 'Avatar upload error: ' + err.message
                });
            }

            // Take req.user from getUserById() middleware
            const user = req.user;

            // Update user fields
            user.name = req.body.name;
            user.password = req.body.password;
            user.email = req.body.email;

            // Update avatar if uploaded
            if (req.file) {
                user.avatar = req.file.filename;
            }

            // Save the updated User
            const updatedUser = await user.save();

            // Send the updated User as a JSON response
            res.json(updatedUser);
        });
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
