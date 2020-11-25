import notesReducer from './notes';
import { combineReducers } from "redux";

const reducers = combineReducers({
    notes: notesReducer
});

export default reducers;