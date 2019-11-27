const moment = require('moment');

const db = require('./models');

const getDataByDate = async localDate => {
  try {
    const utcFrom = moment(localDate).utc();
    const utcTo = utcFrom.clone().add(1, 'd');

    console.log({
      localDate,
      utcFrom,
      utcTo,
    });

    const Op = db.Sequelize.Op;
    const data = await db.Utc.findAll({
      where: {
        utcTime: {
          [Op.gte]: utcFrom,
          [Op.lt]: utcTo,
        },
      },
      attributes: ['utcTime', 'localTime'],
      raw: true,
    });
    console.log(data, typeof data);
  } catch (error) {
    console.log(error);
  }
};

const run = async () => {
  await getDataByDate(
    moment('2019-11-26')
      .startOf('day')
      .local()
      .format(),
  );
  await db.sequelize.close();
};

run();
