const localStorage = window.localStorage;
const NOTES_LOCAL_STORAGE = 'NOTES_STORAGE';
const storage = localStorage.getItem(NOTES_LOCAL_STORAGE);
const initNotes = storage ? JSON.parse(storage) : [];

const notesReducer = (state = initNotes, action) => {
    switch(action.type) {
        case 'ADD_NOTE':
            return [
                action.payload,
                ...state
            ]
        case 'UPDATE_NOTES':
            return action.payload
        default:
            return state;
    }
}

export default notesReducer;