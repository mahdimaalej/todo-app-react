import React from "react";
import { Input, List, Icon, DatePicker } from "antd";

// Don't forget to include the CSS styles for antd!
import "antd/dist/antd.css";

export default class Todo extends React.Component {
    constructor() {
        super();

        // Initialize the state
        this.state = {
            todos: []
        };
    }

    removeTodo = index => {
        let newTodos = [...this.state.todos];

        // Remove element
        newTodos.splice(index, 1);

        // Decrement greater indexes
        for (let i = index; i < newTodos.length; i++) {
            newTodos[i].index -= 1;
        }

        // Update state
        this.setState({
            todos: newTodos
        });
    };

    //handlePressEnter = (e,r) => {};
    // e is the event
    handlePressEnter = e => {
        // Create a todo object containing its index and content
        // todo = json object (javascript)
        const todo = {
            index: this.state.todos.length,
            content: e.target.value
        };

        // Add the todo to our array
        // todos = ["finish simplex", "new todo"]
        const newTodos = this.state.todos.concat(todo);
        // Clear input
        e.target.value = "";
        // setState pour changer l'etat
        this.setState({
            // pour sauvegarder todo dans la liste todos
            todos: newTodos
        });
    };

    // cont obj = {
    //     "firstname": "Ramzi",
    //     "address": {
    //         "street": "desjardins"
    //     }
    // };

    render() {
        return (
            <div className="todoContainer">
                <h1>TODO App</h1>

                <Input
                    placeholder="What needs to be done?"
                    onPressEnter={this.handlePressEnter}
                />

                <List
                    locale={{ emptyText: "No todo items" }}
                    dataSource={this.state.todos}
                    renderItem={item => (
                        <TodoItem
                            todo={item}
                            removeTodo={this.removeTodo}
                        />
                    )}
                />
            </div>
        );
    }
}

class TodoItem extends React.Component {
    remove = () => {
        // Remove this TodoItem
        this.props.removeTodo(this.props.todo.index);
    };

    render() {
        return (
            <List.Item
                actions={[
                    <Icon
                        type="close-circle"
                        theme="filled"
                        onClick={this.remove}
                    />
                ]}
            >
                {this.props.todo.content}
            </List.Item>
        );
    }
}