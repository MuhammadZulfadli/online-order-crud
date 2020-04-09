'use strict';
module.exports = (sequelize, DataTypes) => {
  const cutomers = sequelize.define('cutomers', {
    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING
  }, {});
  cutomers.associate = function(models) {
    cutomers.belongsTo(models.orders, {
      foreignKey: 'user_id',
      onUpdate: 'CASCADE'
    })
  };
  return cutomers;
};