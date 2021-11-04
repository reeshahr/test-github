require('dotenv').config();
const env = require('env-var');

const port = env.get('APPLICATION_PORT').asPortNumber();
const database = {
  mongoUrls: env.get('MONGO_URLS').asString()
};

const forest = {
  envSecret: env.get('FOREST_ENV_SECRET').asString(),
  authSecret: env.get('FOREST_AUTH_SECRET').asString()
};
const corsOrigins = env.get('CORS_ORIGINS').asString();

module.exports = {
  corsOrigins,
  database,
  forest,
  port
}
