import React,{Component} from 'react';
import '../assets/css/hone.scss';
import Swiper from '../layouts/swiper';
import  GridExample from '../layouts/Grid';
import { Card, WhiteSpace } from 'antd-mobile';
import moment from 'moment';




export default class Home extends Component{
        state={
            list:[]
        };
    Detail = ()=>{

    }
    componentDidMount() {
        fetch(
            `/mock/home`
        ).then(res => res.json()
        ).then(data => this.setState({list:data.page_data}))
    }

    render(){

        return(
            <div className="home">
                <div className="swiper">
                    <Swiper/>
                </div>
                <div className="grid">
                    <GridExample/>
                </div>
                {
                    this.state.list.map((item,index)=>{
                       return <div className="card" key={index} onClick={this.Detail}>
                            <WhiteSpace size="lg" />
                            <Card full>
                            <Card.Header
                            title={item.title}
                            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                            extra={<span>{item.detail.auth}</span>}
                            />
                            <Card.Body>
                            <div>{item.detail.content}</div>
                            </Card.Body>
                            <Card.Footer content="footer content" extra={<div>{moment(item.time).format("YYYY-MM-DD HH:mm:ss")}</div>} />
                            </Card>
                        </div>
                    })
                }


            </div>
        )
    }

}