const express = require('express');
const NumberVoteController = require('../controllers/numberVoteController');
const LogController = require('../controllers/logController');
const numberVoteRouter = express.Router();

numberVoteRouter.route( '/vote' )
    .post( LogController.createLog, NumberVoteController.createVote );

numberVoteRouter.route( '/logs')
    .post( LogController.createLog, LogController.getLogs );

numberVoteRouter.route('/statistic')
    .get( LogController.createLog, NumberVoteController.countVotes );

export default numberVoteRouter;