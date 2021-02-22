import { Component } from "react";

import './index.scss'

export default class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

        this.handleRadio = this.handleRadio.bind(this)
    }

    timeFormat = (timestamp) => {
        let date = new Date(timestamp)

        let Y = date.getFullYear()
        let M = date.getMonth() + 1   
        let D = date.getDate()

        let h = date.getHours()
        let m = date.getMinutes()
        let s = date.getSeconds()

        M = M < 10 ? '0' + M : M
        D = D < 10 ? '0' + D : D
        h = h < 10 ? '0' + h : h
        s = s < 10 ? '0' + s : s
        m = m < 10 ? '0' + m : m

        return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s

    }

    // handleRadio = () => {
    //     let status = this.props

    //     console.log(status)

    //     // status = (status === 0 ? 1 : 0)
    // }

    handleRadio() {
        const {status} = this.props.item
        
        // TODO: 接着写完成后的状态 以及更新完成后的内容

    }


    render(){
        const {id, value} = this.props.item
        return (
            <li key={id} className='todocontent-item'>
                <div className='item-content'>
                    <i className='radio' onClick={this.handleRadio}></i>
                    <span className='content'>{value}</span>
                </div>
                <p className='time'>{this.timeFormat(id)}</p>
            </li>
        )
    }
}