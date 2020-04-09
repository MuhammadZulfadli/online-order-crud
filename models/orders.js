'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    user_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    driver_id: DataTypes.INTEGER
  }, {});
  orders.associate = function(models) {
    orders.hasMany(models.order_items,{
      foreignKey:'order_id',
      as: 'order_detail',
      onDelete:'CASCADE'
    })
    orders.belongsTo(models.cutomers, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
    });
    orders.belongsTo(models.drivers, {
      foreignKey: 'driver_id',
      onDelete: 'CASCADE'
    });
  };
  return orders;
}; 