import React, {Component} from 'react'
import { SearchBar, WhiteSpace, WingBlank } from 'antd-mobile';

export default class SearchBarExample extends React.Component {
    state = {
        value: '美食',
    };

    render() {
        return (<div>
            <WingBlank><div className="sub-title"></div></WingBlank>
            <SearchBar placeholder="Search" maxLength={8} />
            <WhiteSpace />


        </div>);
    }
}

