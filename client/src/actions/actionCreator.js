import ACTION from './actionTypes';

export const getStatisticAction = (data) => {
    return {
        type: ACTION.GET_STATISTIC_ACTION,
        date: data
    }
};

export const createVoteAction = (data) => {
    return {
        type: ACTION.CREATE_VOTE_ACTION,
        data: data
    }
};

export const getLogsAction = (data) => {
    return {
        type: ACTION.GET_LOGS_ACTION,
        data: data
    }
};
