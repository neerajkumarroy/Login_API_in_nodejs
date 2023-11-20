const mongoose = require("mongoose");
const validator = require("validator");


const productSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: [true, "This Email is allready present.....!"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalide Email ")
            }
        }
    },

    password:{
        type:String,
        required:true,
        unique:[true,"This Password is allready present"]
    }
})

module.exports = mongoose.model("students",productSchema);