import React,{Component} from 'react';
import '../assets/css/header.scss'
import SearchBarExample from './serch';


export default class Header extends Component {
    render(){
        return(
            <div>
                <div className="header">
                    <div className="left"></div>
                    <div className="center">
                        <SearchBarExample/>
                    </div>
                    <div className="right">

                        <div className="more"></div>
                    </div>
                </div>
                <div className="null"></div>
            </div>
        )
    }

}