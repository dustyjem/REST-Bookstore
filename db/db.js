const mongodb = require('mongodb');
const dotenv = require('dotenv').config();

const MongoClient = mongodb.MongoClient;
const url = process.env.MONGODB_URI;

let _db;

const initDb = callback => {
  if (_db) {
    console.log('Database is already initialized!');
    return callback(null, _db);
  }
  MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,
  })
    .then(client => {
      _db = client.db('bookstore'); // Select the "bookstore" database
      callback(null, _db);
    })
    .catch(err => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error('Database not initialized!');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
};
