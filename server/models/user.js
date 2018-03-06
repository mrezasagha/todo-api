const mongoose = require('mongoose');
var  User = mongoose.model('User', {
    name: {
        type: String ,
        required: true ,
        minlength: 4,
        maxlength: 13 ,
        trim: true
    },
    age: {
        type: Number ,
        required: true
    },
    location: {
        type: String ,
        default: 'usa'
    },
    job: {
        type: String
    }
});

module.exports = {User};