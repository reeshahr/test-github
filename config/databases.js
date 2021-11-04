'use strict';

const path = require('path');
const { database } = require('.');

const databaseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = database.mongoUrls.split(';').map( (url, i) => {
  const name = url.split("//")[1].split("/")[1].split("?")[0];
  const db =  {
    name,
    modelsDir: path.resolve(__dirname, `../models/${name}`),
    connection: {
      url,
      options: { ...databaseOptions },
    }
  }
console.log({db})
  return db;
})


