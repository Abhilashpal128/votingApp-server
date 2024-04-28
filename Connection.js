const mongoose = require("mongoose");

const UserDBConnection = (url) => {
  return mongoose.connect(url);
};

module.exports = {
  UserDBConnection,
};
