const { MongoClient, ObjectID } = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to database');
    }
    var dbo = db.db('TodoApp');
    console.log('Successfully connected to Mongodb server');
    //delete deleteMany()
    // dbo.collection('Todos').deleteMany({text: 'something to do'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne()
    // dbo.collection('Todos').deleteOne({text: 'go to gym'}).then((result) => {
    //     console.log(result);
    // });


    //findOneAndDelete()
    // dbo.collection('Todos').findOneAndDelete({text: 'buy food'}).then((result) => {
    //     console.log(result);
    // });

    // dbo.collection('User').deleteMany({name: 'mreza'}).then((result) => {
    //     console.log(result);
    // })

    dbo.collection('User').deleteOne({_id: new ObjectID("5a94008ddec11c0f9a6ec71e")}).then((result) => {
        console.log(result);
    })

    // dbo.close();
});