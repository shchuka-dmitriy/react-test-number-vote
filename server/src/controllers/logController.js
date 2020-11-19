import { Log } from './../models';
import {ServerError} from "../utils/errors";
import CONSTANTS from '../constants';

module.exports.createLog = (req, res, next) => {
    const strHeader = (CONSTANTS.URL_HEADER);
    const url = strHeader.concat(req.headers.host, req.url)
    Log.create({
        url: url,
        json: req.body
    }).then( () => next() )
    .catch(err => {
        next(new ServerError(err))
    });
}

module.exports.getLogs = (req, res, next) => {
    const { body: {limit, offset} } = req;
    Log.findAll({
        limit,
        offset: offset || 0,
        order: [['date', 'DESC'], ['url', 'DESC']],
    })
        .then(logs => {
            let haveMore = true;
            if (logs.length < 10) {
                haveMore = false;
            }
            res.send({ logsData: logs, haveMore });
        })
        .catch(err => next(new ServerError(err)));
};