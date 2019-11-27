const db = require('./models');

const createTable = async () => {
  await db.sequelize.sync();
  await db.sequelize.close();
};

createTable();
