import React,{Component} from 'react';
import axios from '../utils/axios';
import "../assets/css/reg.scss"


export default class Reg extends Component{
    state={
        username:"",
        password:"",
        msg:""
    };
    reg= ()=>{
        console.log(1)
        axios({
            url:'/mock/reg',
            method:'POST',
            data:{username:this.state.usename,password:this.state.password}
        }).then(res=>{
            console.log(res)
            if(res.data.error===0){
                this.props.history.push('/login')

            }else{
                this.setState({msg:'注册失败'})

            }
        })
    }


    render(){
        return(
            <div className="reg">
                <div className="title">注册</div>
                <div className="user">
                    账号:
                    <input type="text" value={this.state.username}  onChange={(ev)=>this.setState({username:ev.target.value})}/>
                </div>
                <div className="password">
                    密码:
                    <input type="password" value={this.state.password} onChange={(ev)=>this.setState({password:ev.target.value})}/>
                </div>
                <div className="btn">
                    <input type="button" value="提交" onClick={this.reg}/>
                    <a href="#">忘记密码</a>
                    <a href="#">{this.state.msg}</a>
                </div>

            </div>
        )
    }

}