import { NumberVote } from './../models';
import { ServerError } from "../utils/errors";

module.exports.createVote = (req, res, next) => {
    const value = req.body;
    NumberVote.create({
        number: value.number
    }).then(savedNumber => {
        res.send(`Vote for ${savedNumber.number} confirmed`);
    }).catch(err => {
        next(new ServerError(err))
    });
}

module.exports.countVotes = (req, res, next) => {
    if (req.query.date) {
        const date = req.query.date;
        NumberVote.count({
            where: {
                date
            },
            group: ['number']
        }).then(counts => {
            console.log("counts");
            console.log(counts);
            res.send(counts);
        }).catch(err => {
            next(new ServerError(err))
        });
    } else {
        res.send("No query for searching");
    }
}