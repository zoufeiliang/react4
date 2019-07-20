import React,{Component} from 'react';
import { NavBar, Icon } from 'antd-mobile';


export default class Follow extends Component{
    render(){
        return(
            <div>
                <NavBar
                    mode="dark"
                    leftContent="Back"
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >NavBar</NavBar>
            </div>
        )
    }

}