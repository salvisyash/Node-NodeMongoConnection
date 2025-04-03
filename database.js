const { MongoClient } = require("mongodb");

const url = "mongodb+srv://yashsalvi1209:W6w649e7q7Bwwq2S@test.f9a7qo9.mongodb.net/";

const client = new MongoClient(url);

const dbName = 'HelloWorld';

async function main() {
    
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection('User');

    //Insert 
    const data = {
        firstname: 'Deepika',
        lastname: 'Padukon',
        city: 'Pune',
        phonenumber: '6956859658'
    }

    // const insertResult = await collection.insertMany([data]);
    // console.log('Inserted Documents =>', insertResult);

    // const insertResult = await collection.insertOne(data);
    // console.log('Inserted Documents =>', insertResult);

    // //Read
    // const findResult = await collection.find({}).toArray();
    // console.log('Found Documents =>', findResult);

    // const countResult = await collection.countDocuments({city: 'Pune'});
    // console.log('Count Documents =>', countResult);

    const result = await collection.find({city: 'Pune'}).toArray();
    console.log('Result =>', result);

    return "done.";
}

main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());