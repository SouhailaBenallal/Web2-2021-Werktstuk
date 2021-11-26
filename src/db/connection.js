const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:admin@cluster0.fiumr.mongodb.net/Comments?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db('Web2Werkstuk').collection('Comments');
  // perform actions on the collection object
  client.close();
});