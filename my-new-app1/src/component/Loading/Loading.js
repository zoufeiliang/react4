import React from 'react';
import './css/loading.scss'
export default class Loading extends React.Component{
    render(){
        return(
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>


        )
    }

}