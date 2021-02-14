import React, { Component } from 'react';
import './toDoList.css';
import ToDos from '../ToDos/ToDos';
import ToDoService from '../../services/ToDoService';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.toDoService = new ToDoService();
        this.state = {
            items: [],
            newItemName: '',
        }
    }

    componentDidMount = async () => {
        await this.updatePage();
    }

    updatePage = async () => {
        const data = await this.toDoService.getResults();
        this.setState({
            items: data,
        });
    }

    handleEditClicked = async (id, name) => {
        await this.toDoService.changeItem(id, name);
        await this.updatePage();
    }

    handleInputChanged = (event) => {
        this.setState({
            newItemName: event.target.value,
        });
    }

    handleAddItemClicked = async () => {
        await this.toDoService.addItem(this.state.newItemName);
        this.setState({
            newItemName: '',
        });
        await this.updatePage();
    }

    handleDeleteClicked = async (id) => {
        await this.toDoService.deleteItem(id);
        await this.updatePage();
    }

    handleAddItemKeyPressed = async (event) => {
        if (event.key === 'Enter') {
            await this.handleAddItemClicked();
        }
    }

    render() {
        return (
            <div className="main" >
                <div className="toDo">
                    <h2>Your ToDos:</h2>
                    <ToDos
                        onEditClicked={this.handleEditClicked}
                        onDeleteClicked={this.handleDeleteClicked}
                        items={this.state.items}
                    />
                    <div className="addItem-container">
                        <input
                            type='text'
                            className="addItem-input"
                            onKeyPress={this.handleAddItemKeyPressed}
                            onChange={this.handleInputChanged}
                            value={this.state.newItemName} />
                        <button
                            className="addItem"
                            onClick={this.handleAddItemClicked}>
                            &#10010;
                            </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default ToDoList;
