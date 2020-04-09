'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert(
        'cutomers', 
        [
          {
          fullname: 'Muhammad Zulfadli',
          username:"ipay",
          email:"ipay@email.com",
          phone_number:"085760860595",
          createdAt: new Date(),
          updatedAt: new Date()
          },
          {
            fullname: 'Ayana Shahab',
            username:"Ayaaa",
            email:"ayaaa@email.com",
            phone_number:"0812345689",
            createdAt: new Date(),
            updatedAt: new Date()
            }
        ]
      );
  
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
      */
     return queryInterface.bulkDelete('cutomers', null, {});
    }
};
