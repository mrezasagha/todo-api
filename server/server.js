var {mongoose} = require('./db/mongoose');
var express = require('express');
var bodyParser = require('body-parser');
const _ = require('lodash');
const {ObjectID} = require('mongodb');

var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
var port = process.env.PORT || 3000 ;
app.use(bodyParser.json());
app.post('/todos', (req, res) => {

    var todo = new Todo({
       text: req.body.text
    });

    todo.save().then((doc) => {
       res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) =>  {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    })
});

//GET todo/:id
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)) {
      return  res.status(404).send();
    }
        Todo.findById(id).then((todo) => {
            if (!todo) {
                 return   res.status(404).send();
            }
            res.send({todo});
        }).catch((e) => {
            res.status(400).send(e);
        });

});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }
        res.status(200).send(todo);
    }).catch((e) => {
        res.status(400).send(e);
    });
});

//update using patch
app.patch('/todos/:id', (req, res) => {
   var id = req.params.id;
   var body = _.pick(req.body, ['text', 'completed']);

   if (!ObjectID.isValid(id)) {
       return res.status(404).send();
   }
   if(_.isBoolean(body.completed) && body.completed) {
       body.completedAt = new Date().getTime();
   } else {
       body.completed = false ;
       body.completedAt = null;
   }
   Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
       if(!todo) {
           return res.status(404).send();
       }
       res.send({todo});
   }).catch((e) => {
       return res.status(400).send(e);
   });
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

































 //add values to properties

// var newTodo = new Todo({
//    text: '   Cook   dinner   ',
// });
 //save to database
// newTodo.save().then((doc) => {
//    console.log('Saved Todo', doc);
// }, (e) => {
//     console.log('Unable to save todo', e);
// });
// var newUser = new User({
//     name: ' Parsa   Sagha  ',
//     age: 35,
//     location: 'Turkey',
//     job: ' web developer'
// });
// newUser.save().then((doc) => {
//     console.log('Saved user', doc);
// }, (e) => {
//     console.log('Unable to save user', e);
// });
