const mongoose = require('mongoose');

const connect = () => {

    const url = process.env.MONGO_CONNECTION_URL;

    mongoose.connect(url)
}

const disconnect = () => {
    
    if (!mongoose.connection) {
      return;
    }
    
    mongoose.disconnect();

};

module.exports = {
    connect,
    disconnect
}