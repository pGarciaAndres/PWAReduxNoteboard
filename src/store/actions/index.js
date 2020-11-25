export const addNoteAction = note => {
    return {
        type: 'ADD_NOTE',
        payload: note
    };
};

export const updateNotesAction = notes => {
    return {
        type: 'UPDATE_NOTES',
        payload: notes
    };
};