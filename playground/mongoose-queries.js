const {ObjectId} = require('mongodb');

const{mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


Todo.find({
    _id: new ObjectId("5a9dadb1fbcfca080c5ba033")
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: new ObjectId("5a9dadb1fbcfca080c5ba033")
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById('5a9dadb1fbcfca080c5ba033').then((todo) => {
    if(!todo) {
        return console.log('Id not found');
    }
    console.log('Todo by id', todo);
}).catch((e) => {
    console.log(e);
});