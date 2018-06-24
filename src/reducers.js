import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './actionTypes';

const initialSearchState = {
    search: ''
    
}

export const searchRobots = (state = initialSearchState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case CHANGE_SEARCH_FIELD:
            return { ...state, search: payload };
        default:
            return state;
    }
}


const initialRobotState = {
    robots: [],
    isPending: true
}
export const requestRobots = (state = initialRobotState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case REQUEST_ROBOTS_SUCCESS:
            return { ...state, robots: payload, isPending: false };
        case REQUEST_ROBOTS_PENDING:
            return { ...state, isPending: true };
        case REQUEST_ROBOTS_FAILED:
            return { ...state, error: payload, isPending: false };
        default:
            return state;
    }
}