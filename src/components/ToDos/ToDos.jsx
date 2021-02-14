import React from 'react';
import './toDos.css';
import ToDoItem from '../ToDoItem';

export default function ToDos(props) {
    return (
        <div className="toDo-list">
            {props.items.map((item) =>
                <ToDoItem
                    onDeleteClicked={props.onDeleteClicked}
                    onEditClicked={props.onEditClicked}
                    key={item.id}
                    item={item}
                />
            )}
        </div>
    );
}
