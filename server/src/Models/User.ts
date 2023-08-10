import mongoose from "mongoose";

const User = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            trim: true,
            maxlength: 50
        },
        email: {
            type: String,
            require: true,
            trim: true,
            maxlength: 50
        },
        password: {
            type: String,
            require: true,
            trim: true,
            maxlength: 15
        },
    }
);

module.exports = mongoose.model("User", User);