'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert( 'Logs', [
            {
                url: 'http://localhost:9633/logs',
                json: '{"limit":10,"offset":0}',
                date: '2020-11-19',
            },
            {
                url: 'http://localhost:9633/logs',
                json: '{"limit":10,"offset":10}',
                date: '2020-11-19',
            },
            {
                url: 'http://localhost:9633/logs',
                json: '{"limit":10,"offset":20}',
                date: '2020-11-19',
            },
            {
                url: 'http://localhost:9633/vote',
                json: '{"number":6}',
                date: '2020-11-19',
            },
            {
                url: 'http://localhost:9633/vote',
                json: '{"number":5}',
                date: '2020-11-19',
            },
            {
                url: 'http://localhost:9633/vote',
                json: '{"number":4}',
                date: '2020-11-19',
            },
            {
                url: 'http://localhost:9633/vote',
                json: '{"number":3}',
                date: '2020-11-19',
            },
            {
                url: 'http://localhost:9633/vote',
                json: '{"number":2}',
                date: '2020-11-19',
            },
            {
                url: 'http://localhost:9633/vote',
                json: '{"number":1}',
                date: '2020-11-19',
            },
            {
                url: 'http://localhost:9633/statistic?date=2020-11-19',
                json: '{}',
                date: '2020-11-19',
            },
        ], {} );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete( 'Logs', null, {} );
    }
};