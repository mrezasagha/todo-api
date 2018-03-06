const {ObjectID} = require('mongodb');

const{mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//     console.log(result);
// });
var id ="﻿5a9f01ff77cbeda0b61637ac";
//findOneAndRemove
//Todo.findOneAndRemove

Todo.findByIdAndRemove('5a9f01ff77cbeda0b61637ac').then((todo) => {
    console.log(todo);
});
