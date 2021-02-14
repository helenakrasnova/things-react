import React, { useState } from 'react';
import './toDoItem.css';

export default function ToDoItem(props) {
    const { item } = props;
    const [itemName, setItemName] = useState(item.name);
    const [editMode, setEditMode] = useState(false);
    const handleKeyPressed = (event) => {
        if (event.key === 'Enter') {
            updateItem();
        }
    }
    const updateItem = () => {
        props.onEditClicked(item.id, itemName);
        setEditMode(!editMode);
    }
    return (
        <div className="toDo-item" data-id={item.id} key={item.id}>
            {editMode ?
                <input
                    type='text'
                    className="toDo-input"
                    value={itemName}
                    onChange={(event) => setItemName(event.target.value)}
                    onKeyPress={handleKeyPressed}
                    onBlur={updateItem} /> :
                <span className="toDo-span">{itemName}</span>}
            <div className="buttons">
                {editMode ? '' :
                    <button
                        className="edit"
                        onClick={() => setEditMode(!editMode)}>
                        &#9998;
                    </button>}
                <button
                    className="delete"
                    onClick={() => props.onDeleteClicked(item.id)}>
                    &#10008;
                    </button>
            </div>
        </div>
    );
}
