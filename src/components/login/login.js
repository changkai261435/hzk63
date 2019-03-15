import React, { Component } from 'react'
import 'antd-mobile/dist/antd-mobile.css'
import "./login.css";
import axios from "axios";
import { Flex, WhiteSpace, WingBlank, NavBar, Icon, List, InputItem, Button, Toast } from 'antd-mobile'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uname: '',
            pwd: ''
        }
    }
    changeValue = (k, v) => {
        // console.log(k,v);
        this.setState({
            [k]: v
        })
    }
    // handleLogin = async () => {
    //     const { history } = this.props
    //     const body = this.state
    //     const res = await axios.post(`http://47.96.21.88:8086/users/login`, body)
    //     console.log(res);
    //     const { meta: { status, msg }, data } = res
    //     if (status === 200) {
    //         history.push('/')
    //     } else {
    //         Toast.fail(msg, 2);
    //     }
    // }
    handleLogin = async () => {
        const { history } = this.props
        // console.log(this.state)
        const body = this.state
        const res = await axios.post(`http://47.96.21.88:8086/users/login`, body)
        // console.log(res)
        const { meta, data } = res.data
        if (meta.status === 200) {
            // 去 / home
            history.push('/')
            // console.log(this.props)
        } else {
            // 提示
            Toast.fail(meta.msg, 1)
        }
    }
    render() {
        return (
            <div className="flex-container" justify="conter">
                <Flex direction="column">
                    <Flex.Item>
                        <WingBlank size="sm">
                            <NavBar mode="dark">登录</NavBar>
                        </WingBlank>
                        <WhiteSpace size="lg" />
                    </Flex.Item>
                    <Flex.Item>
                        <List>
                            <WingBlank size="sm">
                                <InputItem value={this.state.uname} onChange={v => {
                                    this.changeValue('uname', v)
                                }} placeholder="请输入用户名" type="text">用户名</InputItem>
                                <InputItem value={this.state.pwd} onChange={v => {
                                    this.changeValue('pwd', v)
                                }} placeholder="请输入密码" type="password">密码</InputItem>
                            </WingBlank>
                        </List>
                        <WhiteSpace size="lg" />
                        <WingBlank size="sm">
                            <Button type="primary" size="small" onClick={this.handleLogin}>登录</Button>
                        </WingBlank>
                        <WhiteSpace size="lg" />
                    </Flex.Item>
                </Flex>

            </div>
        )
    }
}
export default Login