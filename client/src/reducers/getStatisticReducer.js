import ACTION from '../actions/actionTypes';

const initialState = {
    statisticData: null,
    isFetching: true,
    error: null,
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
        case ACTION.GET_STATISTIC_SUCCESS: {
            return {
                ...state,
                statisticData: action.statistic,
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