const chalk = require('chalk');
const path = require('path');
const Liana = require('forest-express-mongoose');
const { forest } = require('../config');
const models = require('../models');
const { objectMapping, connections }  = models;


module.exports = async function forestadmin(app) {
  app.use(await Liana.init({
    configDir: path.join(__dirname, '../forest'),
    envSecret: forest.envSecret,
    authSecret: forest.authSecret,
    objectMapping,
    connections,
  }));

  console.log(chalk.cyan('Your admin panel is available here: https://app.forestadmin.com/projects'));
};
