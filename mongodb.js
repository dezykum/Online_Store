//CRUD operations

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const connetionURL ='mongodb://127.0.0.1:27017';
const databaseName = 'Shopping';
MongoClient.connect(connetionURL, { useNewUrlParser: true}, (error, client)=>{
if(error){
    return console.log('Unable to connect the database');
}
const db = client.db(databaseName);
var myobj = [
    { name: 'JBL Earphone', price:'400',imageURL: '',available:'3'},
    { name: 'Prestige Cooker', price:'200',imageURL: '',available:'2'},
    { name: 'Bajaj Steam Iron', price:'300',imageURL: '',available:'3'},
    { name: 'Prestige Mixer Grinder', price:'300',imageURL: '',available:'2'},
    { name: 'Bosh Earphone', price:'300',imageURL: '',available:'2'} 
  ]
db.collection('Products').insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
  });
})
