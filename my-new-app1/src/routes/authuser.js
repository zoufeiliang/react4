import React,{Component} from 'react';
import {Route,Redirect} from 'react-router-dom';
import User from '../pages/User'


class AuthUser extends Component {
    constructor(){
        super();
        this.state={
            hasAuth:true,//是否发送过授权请求
            auth:false,  //授权结果
        };
        fetch({
            url:'/mock/user'
        }).then(res=>this.setState({hasAuth:true}))

    }
    /*fetch({
              url:'/mock/user'
          }).then(res=>this.setState({hasAuth:true,auth:res.data.auth}))

}*/
    render(){
        if (!this.state.hasAuth) return null;
        return <Route  render={(props)=>{

            return this.state.auth ? <User {...props} /> : <Redirect to="/Reg"/>
        }} />
    }
}
export default AuthUser;