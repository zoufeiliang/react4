import React ,{Component} from 'react';
import propTypes from 'prop-types';
import '../assets/css3/MyButton.css';
//自定义一个按钮插件

class MyButton extends Component{
    render(){
        return(
            <input
                className={`s2 button` + this.props.mode}
                type="button"
                value={this.props.text}
                onClick={this.props.clickHandler}
                />
        )
    }
}

//默认值
MyButton.defaultProps ={
    text:'按钮',
    mode:'primary'
};

//设置类型
MyButton.propTypes = {
    text:propTypes.string,
    mode:propTypes.string,
    clickHandler:propTypes.func.isRequired
}

export default MyButton