import { Component } from "react";

import './index.scss'

export default class TodoInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }

    // 监听值的改变
    handleChangeValue = ({target:{value}}) => {
        this.setState({inputValue:value})
    }

    handleAddValue = () => {
        const { inputValue } = this.state
        // e.stopPropagation()
        // alert(this.state.inputValue)
        if(inputValue.trim() === '') return alert('请输入待办')
        // TODO:传值到父组件 并清除值
        this.props.addData(inputValue)
        // console.log(this.props.addData(inputValue))
        this.inputValue = ''

    }




    render(){
        return (
            <div className='todoinput-container'>
                <input type="text" className='todoinput' onInput={this.handleChangeValue} />
                <div className='submit' onClick={this.handleAddValue}>添加待办</div>
            </div>
        )
    }
}