const monogoose = require('mongoose')

const personschema = monogoose.Schema({
    
    name:{
        type:String,
        required: true
    },
    tech:{
        type:String,
        required:true
    },
    live:{
        type:Boolean,
        required:true,
        default:false
    }
}) 
module.exports = monogoose.model('persons',personschema)
