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
        const {status,id,value} = this.props.item
        
        // TODO: 接着写完成后的状态 以及更新完成后的内容
        const  newStatus = status === 0 ? 1 : 0

        let obj = {
            id,
            value,
            status:newStatus
        }

        this.props.updateStatus(obj)

    }

    handleDelete = () => {
        const {id} = this.props.item
        this.props.deleteValue(id)
    }


    render(){
        const {id, value, status} = this.props.item
        const itChecked = {
            backgroundColor : '#000'
        }
        const deleteLine = {
            textDecoration: 'line-through'
        }
        const hideElement = {
            display: 'none'
        }
        return (
            <li key={id} className='todocontent-item'>
                <div className='item-content'>
                    <i className='radio' onClick={this.handleRadio} style={ status ? itChecked : null }></i>
                    <span className='content' style={ status ? deleteLine : null}>{value}</span>
                </div>
                <p className='time' style={status ? hideElement : null }>{this.timeFormat(id)}</p>
                <p className='time' style={status ? null : hideElement } onClick={this.handleDelete}>删除</p>
            </li>
        )
    }
}