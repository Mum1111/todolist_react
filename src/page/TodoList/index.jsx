import React, { Component } from "react";
import TodoContent from "../../component/TodoContent";
import TodoInput from "../../component/TodoInput";

import './index.scss'


export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    addData = (value) => {
        const todoItem = {
            value,
            id: new Date().getTime(),
            status: 0
        }
        this.setState({ list: [...this.state.list, todoItem] },()=> {
            localStorage.setItem('list', JSON.stringify(this.state.list))
        })
    }

    updateData = (value) => {
        const { list } = this.state
        let index = list.findIndex((item) => {
            return item.id === value.id
        })
        list.splice(index, 1, value)
        this.setState({ list: list },()=>{
            localStorage.setItem('list', JSON.stringify(this.state.list))
        })
    }

    deleteData = (id) => {
        const { list } = this.state
        let index = list.findIndex((item) => {
            return item.id === id
        })

        list.splice(index, 1)
        this.setState({ list: list },()=> {
            localStorage.setItem('list', JSON.stringify(this.state.list))
        })
    }

    componentDidMount(){
        // TODO:查询localstorage
        const list = JSON.parse(localStorage.getItem('list'))
        if(list) {
            this.setState({list:list})
        }
    }

    render() {
        return (
            <>
                <h1>ToDoList</h1>
                <TodoInput addData={this.addData} />
                {this.state.list ? (<TodoContent list={this.state.list} updateData={this.updateData} deleteData={this.deleteData}></TodoContent>) : null}
            </>
        )
    }
}