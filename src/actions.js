import { CHANGE_SEARCH_FIELD } from './actionTypes';
export const changeSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});