import React, {Component} from "react";
import TodoInput from "../../component/TodoInput";


export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list : []
        }
    }

    render(){
        return (
            <>
                <h1>ToDoList</h1>
                <TodoInput />
            </>
        )
    }
}