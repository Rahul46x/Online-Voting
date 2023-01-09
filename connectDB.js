const Sequelize = require("sequelize");

const database = "todo_db";
const username = "rahul";
const password = "changeme";
const sequelize = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "rahul",
  
});

const connect = async () => {
  return sequelize.authenticate();
};

module.exports = {
  connect,
  sequelize,
};
