import React, {Component} from 'react'
import {Link,NavLink,Route,Redirect,Switch} from "react-router-dom";

//import '../library/font'
import '../assets/css/base.css'
import Header from './Header';
import Footer from "./Footer";
import '../assets/css/app.scss';


import AuthUser from '../routes/authuser'
import Home from "../pages/Home";
import Follow from "../pages/Follow";
import Column from "../pages/Column";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import User from "../pages/User";
import Detail from "../pages/Detail";
import ErrorPage from "../pages/ErrorPage";
import Loading from "../component/Loading/Loading"

export default class App extends Component{
    state = {
        header:true,
        footer:true,
        loading:false
    };

    checkPath(path){
        if (/Home/.test(path)){
            this.setState({header:true,footer:true})
        }
        if (/[^Detail|Column|Follow|/|Home|home]/.test(path)){
            this.setState({header:false,footer:false})
        }
        if (/User|Follow|Column/.test(path)) {
            this.setState({header: false, footer: true})
        }
        if (/Detail/.test(path)){
            this.setState({header:true,footer:false})
        }
    }
    componentWillReceiveProps(nextProps){
        console.log('app',nextProps.location.pathname);//监听路由
        let path  = nextProps.location.pathname;
        this.checkPath(path)
    }
    componentDidMount(){
        let path  = this.props.location.pathname;
        this.checkPath(path)
    }

    render(){
        return(
            <div className="App">
                {this.state.loading && <Loading/>}
                {this.state.header && <Header/> }



                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/follow" component={Follow}/>
                    <Route path="/column" component={Column}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/Reg" component={Reg}/>
                    <AuthUser Route path="/user" component={User}/>
                    <Route path="/follow" component={Follow}/>
                    <Route path="/detail:id" component={Detail}/>
                    <Redirect exact from="/" to="/home"/>
                    <Route component={ErrorPage} />


                </Switch>
                {this.state.footer && <Footer history={this.props.history}/>}
            </div>


        )
    }
}
