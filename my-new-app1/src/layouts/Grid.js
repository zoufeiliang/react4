import { Grid } from 'antd-mobile';
import React from 'react';
const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
}));



const GridExample = () => (
    <div>


        <div className="sub-title"></div>
        <Grid data={data} isCarousel onClick={_el => console.log(_el)} />


    </div>
);

export default GridExample;