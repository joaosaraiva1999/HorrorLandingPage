import './Styles.css'
import React from 'react';
import { FloatButton } from 'antd';

function Backtop() {

  return (
    <div 
    style={{
        height: '300vh',
        padding: 10,
      }}
    >

      <FloatButton.BackTop  className='backtop_btn'/>
    </div>
      
  )
}

export default Backtop
