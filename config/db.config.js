const mongoose = require('mongoose');

const connect = () => {

    const url = 'mongodb://mongo:27017';

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