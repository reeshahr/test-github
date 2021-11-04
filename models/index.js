'use strict';

const fs = require('fs');
const path = require('path');
const Mongoose = require('mongoose');
const databasesConfiguration = require('../config/databases');
const connections = {};
const db = {};
const models = {};

databasesConfiguration.forEach((databaseInfo) => {
  models[databaseInfo.name] = {};
  const connection = Mongoose.createConnection(databaseInfo.connection.url, databaseInfo.connection.options);
  connections[databaseInfo.name] = connection;

  const modelsDir = databaseInfo.modelsDir || path.join(__dirname, databaseInfo.name);
  fs
    .readdirSync(path.join(__dirname, databaseInfo.name))
    .filter((file) => file.indexOf('.') !== 0 && file !== 'index.js')
    .forEach((file) => {
      try {
        const model = require(path.join(path.join(__dirname, databaseInfo.name, file)))(connection, Mongoose);
        models[databaseInfo.name][model.name] = model;
      } catch (error) {
        console.error('Model creation error: ' + error);
      }
    });
});

db.objectMapping = Mongoose;
db.connections = connections;

module.exports = db;
