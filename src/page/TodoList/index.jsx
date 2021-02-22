import React, {Component} from "react";
import TodoContent from "../../component/TodoContent";
import TodoInput from "../../component/TodoInput";

import './index.scss'


export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list : []
        }
    }

    addData = (value) => {
        const todoItem = {
            value,
            id: new Date().getTime(),
            status:0
        } 
        this.setState({list:[...this.state.list,todoItem]})
    }

    render(){
        return (
            <>
                <h1>ToDoList</h1>
                <TodoInput  addData={this.addData} />
                <TodoContent list={this.state.list}></TodoContent>
            </>
        )
    }
}