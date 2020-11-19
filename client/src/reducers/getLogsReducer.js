import ACTION from '../actions/actionTypes';

const initialState = {
    logsData: null,
    isFetching: true,
    error: null,
    haveMore: true
};

export default function (state = initialState, action) {

    switch (action.type) {
        case ACTION.GET_STATISTIC_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null
            }
        }
        case ACTION.GET_LOGS_SUCCESS: {
            return {
                ...state,
                logsData: action.logsData,
                haveMore: action.haveMore,
                isFetching: false,
                error: null
            };
        }
        case ACTION.GET_STATISTIC_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
}