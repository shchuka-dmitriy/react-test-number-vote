import {put} from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import * as restController from '../api/rest/restController';

export  function* getStatisticSaga(action) {
    try{
        const { data } = yield restController.getStatistic(action.date);
        yield put({type: ACTION.GET_STATISTIC_SUCCESS, statistic: data});
    }
    catch (e) {
        yield put({type: ACTION.GET_STATISTIC_ERROR, error: e.response});
    }
}

export function* numberVoteSaga(action) {
    try {
        const {data} = yield restController.createVote(action.data);
        yield put({type: ACTION.CREATE_VOTE_SUCCESS, data: data});
    } catch (err) {
        yield  put({type: ACTION.CREATE_VOTE_ERROR, error: err.response});
    }
}

export function* getLogsSaga(action) {
    try{
        const { data } = yield restController.getLogs(action.data);
        yield put({type: ACTION.GET_LOGS_SUCCESS, logsData: data.logsData, haveMore: data.haveMore});
    }
    catch (e) {
        yield put({type: ACTION.GET_STATISTIC_ERROR, error: e.response});
    }
}