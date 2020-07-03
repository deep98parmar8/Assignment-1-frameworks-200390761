module.exports = router;
const mongoose = require('mongoose');
//Create Schema
const InfoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    question: {
        type: String,
        required: true,
        trim: true
    }
});
//Create and instantiate model with schema
const Info = mongoose.model("Info", InfoSchema);
module.exports = Info;