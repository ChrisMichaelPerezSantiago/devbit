require('dotenv').config();

/**
 *  @typedef EnvironmentConfiguration
 *  @prop {string} PORT the port to listen on
 *  @prop {string} MONGO_HOST Host URL of the Mongo instance
 *  @prop {string} MONGO_USER Mongo DB username
 *  @prop {string} MONGO_PASS Mongo db password
 *  @prop {string} MONGO_DBNAME Name of mongo database
 *  @prop {string} TOKEN_SECRET secret token
 **/

/**
 * @type {EnvironmentConfiguration}
 **/
const config ={
  ...process.env,
};


module.exports = config;