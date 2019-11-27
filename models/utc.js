module.exports = (sequelize, DataTypes) => {
  const Utc = sequelize.define(
    'utc',
    {
      utcTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      localTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
  );

  return Utc;
};
