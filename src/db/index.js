const mongoose = require('mongoose');
const config = require('../config');

mongoose
  .connect(`mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASS}@cluster0-r5iva.mongodb.net/test?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() =>{
    console.log('🚩 ... Connected to MongoDB')
  }).catch((err) =>{
    console.error('failed to connect to MongoDB', err);
    process.exit(1);
  });

module.exports = Object.assign(mongoose , {
  async okDB(){
    if(mongoose.connection.readyState !== mongoose.STATES.connected &&
       mongoose.connection.readyState !== mongoose.STATES.connecting
    ){
      throw new Error(`Database is not ready (state: ${mongoose.connection.readyState}`)
    }
  },
  async shutdown(){
    console.log('DB Disconnected')
    return mongoose.disconnect();
  }
})
  