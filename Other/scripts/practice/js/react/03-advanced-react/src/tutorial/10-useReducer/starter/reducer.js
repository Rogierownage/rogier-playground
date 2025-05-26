import { REMOVE_ITEM, CLEAR_PEOPLE, RESET_PEOPLE } from './actions.js'
import { data } from '../../../data';

export default (state, action) => {
    switch (action.type) {
        case REMOVE_ITEM:
            return {
                ...state,
                people: state.people.filter((person) => person.id !== action.payload.id),
            };
        case CLEAR_PEOPLE:
            return { ...state, people: [] };
        case RESET_PEOPLE:
            return { ...state, people: data };
        default:
            return state;
    }
};