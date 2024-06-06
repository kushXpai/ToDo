const mongoose = require("mongoose");

const conn = async (req, res) => {
    try{
        await mongoose
        .connect("mongodb+srv://kushpai:Bmr84xj59c@cluster0.42td7un.mongodb.net/")
        .then(() => {
            console.log("Connected");
        });
    } catch (error) {
        res.status(400).json({
            message : "Not Connected"
        });
    }
};

conn();