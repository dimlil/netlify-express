import mongoose from "mongoose";

const HouseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    propertyDescription: {
        type: String,
        required: true
    },
    availablePieces: {
        type: Number,
        required: true
    },
    rentedAHome: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    Owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
{timestamps: true});
export default mongoose.model('House', HouseSchema);