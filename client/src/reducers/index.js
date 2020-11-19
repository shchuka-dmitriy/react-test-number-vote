import {combineReducers} from 'redux';
import getStatisticReducer from "./getStatisticReducer";
import getLogsReducer from "./getLogsReducer";

const appReducer = combineReducers({
    statisticStore: getStatisticReducer,
    logsStore: getLogsReducer
});

export default appReducer;