const { default: mongoose } = require("mongoose");


let headerSchema = new mongoose.Schema({
    logo: {
        type: String,
        required: true
    },
    navlist: {
        type: [String],
        required: true
    },
    searchico: {
        type: String,
        required: true
    },
    cartico: {
        type: String,
        required: true
    },
    contactbtn: {
        type: [String],
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model("Header", headerSchema)