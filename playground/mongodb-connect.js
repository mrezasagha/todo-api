const { MongoClient, ObjectID } = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if (err) {
       return console.log('Unable to connect to database');
   }
   var dbo = db.db('TodoApp');
   console.log('Successfully connected to Mongodb server');
   dbo.collection('Todos').insertOne({
        text: 'something to do' ,
        completed: false
   }, (err, result) => {
        if (err) {
          return  console.log('unable to insert todo', err);
        }
        console.log(JSON.stringify(result, undefined, 2));
   });
   //users collection
    dbo.collection('User').insertOne({
        name: 'mreza',
        age: 35 ,
        location: 'Iran-urmia'
    }, (err, result) => {
        if (err) {
            return console.log('unable to insert user');
        }
        console.log(JSON.stringify(result, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());
    });
   db.close();
});