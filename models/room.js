const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const room = new Schema({
    DisabledDate:[],
    replies:{
        type:Number,
        require:true,
    },
    stars:{
        type:Number,
        require:true,
    },
    number:{
        type:Number,
        require:true,
        unique:true,
    },
    bedrooms:{
        type:Number,
        require:true,
    },
    beds:{
        type:Number,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    bathrooms:{
        type:Number,
        require:true,
    },
    children:{
        type:Number,
    },
    babies:{
        type:Number,
    },
    smoking:{
        type:Boolean
    },
    friends:{
        type:Boolean
    },
    pets:{
        type:Boolean
    },
    wide_coridor:{
        type:Boolean
    },
    disabled_assistant:{
        type:Boolean
    },
    luxe:{
        type:Boolean
    },
    images: {
        type: [String],
    }
})
module.exports = mongoose.model('Room',room)
