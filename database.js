const config = require('./config');
const mongoose = require('mongoose');
var client = require('mongodb').MongoClient; 
module.exports = () => {
  return new Promise((resolve, reject) => {
    mongoose.Promise = global.Promise;
    mongoose.set('debug', true);
    mongoose.connection
      .on('error', error => reject(error))
      .on('close', () => console.log('Database connection closed.'))
      client.connect(config.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, function(err,db) 
      {

        
      });
     });
}