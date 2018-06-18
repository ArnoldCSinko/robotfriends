import { CHANGE_SEARCH_FIELD } from './actionTypes';
const initialState = {
    search: ''
}

export const searchRobots = (state = initialState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case CHANGE_SEARCH_FIELD:
            return { ...state, search: payload };
        default:
            return state;
    }
}