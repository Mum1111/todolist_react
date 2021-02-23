import { Component } from "react";
import TodoItem from "../TodoItem";

import './index.scss'

export default class TodoContent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    updateStatus = (obj) => {
        this.props.updateData(obj)
    }

    deleteValue = (id) => {
        this.props.deleteData(id)
    }

   

    render(){
        const {list} = this.props
        return (
            <ul className='todocontent-container'>
                {list.map((item) => {
                    return (
                        <TodoItem item = {item}  updateStatus={this.updateStatus} deleteValue={this.deleteValue}/>
                    )
                })}
            </ul>
        )
    }
}