const { MongoClient, ObjectID } = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to database');
    }
    var dbo = db.db('TodoApp');
    console.log('Successfully connected to Mongodb server');

    // dbo.collection('Todos').findOneAndUpdate({
    //     completed: true
    // } , {
    //     $set: {
    //         text: 'not have sex'
    //     }} , {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    dbo.collection('User').findOneAndUpdate({
        name: 'mreza sagha'
    } , {
        $set: {
            location: 'Turkey Izmir'
        } ,
            $inc: {
                age: 2
            }
    }
     , {
        returnOriginal: false
    } ).then((result) => {
        console.log(result);
    })
    // dbo.close();
});