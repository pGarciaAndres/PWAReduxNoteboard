import React, { useRef, useEffect } from 'react';

const CreateNote = props => {
    const title = useRef(null);
    const description = useRef(null);
    
    useEffect(() => {
        title.current.value = '';
        description.current.value = '';
    });

    return (
        <div className='CreateNote'>
            <input
                type="text"
                placeholder="Title"
                className="Title"
                ref={title}
            />
            <input
                type="text"
                placeholder="Take a note..."
                className="Description"
                ref={description}
            />
        </div>
    )
}

export default CreateNote