import {takeLatest} from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import {
    getStatisticSaga,
    numberVoteSaga,
    getLogsSaga
} from "./numberVotesSaga";

function* rootSaga() {
    yield takeLatest(ACTION.GET_STATISTIC_ACTION, getStatisticSaga);
    yield takeLatest(ACTION.CREATE_VOTE_ACTION, numberVoteSaga);
    yield takeLatest(ACTION.GET_LOGS_ACTION, getLogsSaga);
}

export default rootSaga;