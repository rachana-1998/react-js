import React from 'react'
import GrandChild1 from './GrandChild1/GrandChild1'
const childComponent1 = () => {
    return(
       <div
        className='childComponent1'
         >
       <h1> Child Component 1</h1>
      <GrandChild1  x='Heading1' backgroundColor='red'   description=' this is for conditionsl rendering'/>
      <GrandChild1   x='Heading2' backgroundColor='blue'/>
      <GrandChild1   x='Heading3' />
      <GrandChild1   x='Heading4'/>
      <GrandChild1   x='Heading5'/>
      <GrandChild1   x='Heading6'/>
    
       </div>
    );
};

export default childComponent1;