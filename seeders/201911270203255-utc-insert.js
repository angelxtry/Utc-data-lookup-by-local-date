'use strict';
const moment = require('moment');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const timeData = [];
    let count = 0;
    while (count++ < 50) {
      const localTime = moment('2019-11-25')
        .local()
        .add(2 * count, 'h')
        .format('YYYY-MM-DD HH:mm:ss');
      const utcTime = moment(localTime)
        .utc()
        .format('YYYY-MM-DD HH:mm:ss');
      const updatedAt = moment().format('YYYY-MM-DD HH:mm:ss');
      const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
      timeData.push({
        localTime,
        utcTime,
        updatedAt,
        createdAt,
      });
    }
    timeData.push({
      localTime: '2019-11-22 10:10:10',
      utcTime: '2019-11-22 10:10:10',
      updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    });
    return queryInterface.bulkInsert('utcs', timeData, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
