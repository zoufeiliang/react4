import React,{Component} from 'react';
import '../assets/css/login.scss'
import axios from '../utils/axios';
import { Toast, WingBlank} from 'antd-mobile';



export default class Login extends Component{
    state={
        username:"",
        password:"",
        msg:""
    };
    login = ()=>{
        axios({
            url:'/mock/login',
            method:'POST',
            data:{username:this.state.username,password:this.state.password}
        }).then(
            res =>{
                console.log(res)
                if(res.data.error===0){
                    Toast.success('登录成功', 1);
                    setTimeout(()=>{
                        this.props.history.push('/')
                    },300)

                    this.props.history.push('/user')
                }else{
                    this.setState({msg:"登录失败"})
                    
                        Toast.fail('登录失败', 1);


                }
            }
        )
    };

    render(){
        return(
            <div className="login">
                <div className="title">登录</div>
                <div className="user">
                    账号:
                    <input type="text" value={this.state.username}  onChange={(ev)=>this.setState({username:ev.target.value})}/>
                </div>
                <div className="password">
                    密码:
                    <input type="password" value={this.state.password} onChange={(ev)=>this.setState({password:ev.target.value})}/>
                </div>
                <div className="btn">
                    <input type="button" value="提交" onClick={this.login}/>
                    <a href="#">忘记密码</a>

                </div>
            </div>
        )
    }

}