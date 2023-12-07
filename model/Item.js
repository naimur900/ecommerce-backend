const mongoose = require("mongoose");


const itemSchema = new mongoose.Schema({
    tite:{
        type: String,
        required: true
    },
    catagory:{
        type: String,
        required: true

    },
    code:{
        type: String,
        required: true
    },
    isAvailable: { type: Boolean, required: true, default: true },
    imageUrl: { type: String, required: true },
    shopId: {type: mongoose.Schema.Types.ObjectId, ref: "Shop"},

})


module.exports = mongoose.model("Item", itemSchema)