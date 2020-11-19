'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert( 'NumberVotes', [
      {
        number: 1,
        date: '2020-11-18',
      },
      {
        number: 1,
        date: '2020-11-18',
      },
      {
        number: 1,
        date: '2020-11-18',
      },
      {
        number: 1,
        date: '2020-11-18',
      },
      {
        number: 2,
        date: '2020-11-18',
      },
      {
        number: 2,
        date: '2020-11-18',
      },
      {
        number: 3,
        date: '2020-11-18',
      },
      {
        number: 4,
        date: '2020-11-18',
      },
      {
        number: 4,
        date: '2020-11-18',
      },
      {
        number: 7,
        date: '2020-11-17',
      },
      {
        number: 7,
        date: '2020-11-17',
      },
      {
        number: 7,
        date: '2020-11-17',
      },
      {
        number: 7,
        date: '2020-11-17',
      },
      {
        number: 7,
        date: '2020-11-17',
      },
      {
        number: 7,
        date: '2020-11-17',
      },
      {
        number: 7,
        date: '2020-11-17',
      },
      {
        number: 8,
        date: '2020-11-17',
      },
      {
        number: 8,
        date: '2020-11-17',
      },
      {
        number: 9,
        date: '2020-11-17',
      },
      {
        number: 4,
        date: '2020-11-19',
      },
      {
        number: 4,
        date: '2020-11-19',
      },
      {
        number: 4,
        date: '2020-11-19',
      },
      {
        number: 4,
        date: '2020-11-19',
      },
      {
        number: 4,
        date: '2020-11-19',
      },
      {
        number: 5,
        date: '2020-11-19',
      },
      {
        number: 6,
        date: '2020-11-19',
      },
      {
        number: 6,
        date: '2020-11-19',
      },
      {
        number: 7,
        date: '2020-11-19',
      },
      {
        number: 7,
        date: '2020-11-19',
      },
      {
        number: 7,
        date: '2020-11-19',
      },
      {
        number: 8,
        date: '2020-11-19',
      },
      {
        number: 8,
        date: '2020-11-19',
      },
      {
        number: 9,
        date: '2020-11-19',
      },
      {
        number: 9,
        date: '2020-11-19',
      },
      {
        number: 9,
        date: '2020-11-19',
      },
      {
        number: 9,
        date: '2020-11-19',
      },
      {
        number: 2,
        date: '2020-11-19',
      },
      {
        number: 2,
        date: '2020-11-19',
      },
    ], {} );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete( 'NumberVotes', null, {} );
  }
};