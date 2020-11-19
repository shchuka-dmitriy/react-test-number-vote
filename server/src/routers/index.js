import express                from 'express';
import * as ErrorHandlers     from './../middlewares/errorHandler/index.js';
import numberVoteRouter        from './numberVote';
const router = express.Router();

router.use( numberVoteRouter );
router.use( ErrorHandlers.handleApplicationError );
router.use( ErrorHandlers.handleSequelizeError );

export default router;