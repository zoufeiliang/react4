import React,{Component} from 'react';
import Nav from '../layouts/ColumnHeader'
import { Carousel, WingBlank } from 'antd-mobile';
export default class Column extends Component{
    render(){
        return(
            <div className="column">
                <Nav></Nav>
                <div className="move">
                    <Carousel className="my-carousel"
                              vertical
                              dots={false}
                              dragging={false}
                              swiping={false}
                              autoplay
                              infinite
                    >
                        <div className="v-item">carousel 1</div>
                        <div className="v-item">carousel 2</div>
                        <div className="v-item">carousel 3</div>
                    </Carousel>
                </div>
                

            </div>
        )
    }

}