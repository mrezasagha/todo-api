const { MongoClient, ObjectID } = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to database');
    }
    var dbo = db.db('TodoApp');
    console.log('Successfully connected to Mongodb server');
    //Find
    // dbo.collection('Todos').find({completed: true}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('unable to get todos list', err);
    // })

    
    //count
    // dbo.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    //
    // }, (err) => {
    //     console.log('unable to get todos list', err);
    // })


    //find user
    dbo.collection('User').find({name: 'jen'}).toArray().then((docs) => {
        console.log('Users :');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to get todos list', err);
    })
    // dbo.close();
});