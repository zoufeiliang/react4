import React,{Component} from 'react';
import '../assets/css/footer.scss';


export default class Footer extends Component{
    home(){
        this.props.history.push('/Home')
        console.log(this.props.history)

    };
    follow(){
        //this.context.router.history.push("/Follow")
        this.props.history.push('/Follow')
    };
    buy(){
        this.props.history.push('/Column')
    };
    my(){
        this.props.history.push('/User')
    }
    render(){

        return(
            <div>
                <div className="footer" >
                    <div className="footer-home" onClick={this.home.bind(this)}>
                        <i className="h-icon"></i>
                        首页
                    </div>
                    <div className="footer-list"  onClick={this.follow.bind(this)}>
                        <i className="l-icon"></i>
                        推荐
                    </div>
                    <div className="footer-buy" onClick={this.buy.bind(this)}>
                        <i className="b-icon"></i>
                        购物车
                    </div>
                    <div className="footer-my" onClick={this.my.bind(this)}>
                        <i className="m-icon"></i>
                        我的
                    </div>
                </div>
                <div className="footer-null"></div>
            </div>
        )
    }

}