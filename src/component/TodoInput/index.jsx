import { Component } from "react";

import './index.less'

export default class TodoInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }

    render(){
        return (
            <div className='todoinput-container'>
                <input type="text" className='todoinput-container' />
                <div className='submit'>添加待办</div>
            </div>
        )
    }
}