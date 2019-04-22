import React from "react";
import { Input, List, } from "antd";

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
                        <List.Item>{item.content}</List.Item>
                    )}
                />
            </div>
        );
    }
}