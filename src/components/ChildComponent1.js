import React from 'react'
import GrandChild1 from './GrandChild1'
const childComponent1 = () => {
    return(
       <div
        className='childComponent1'
        style={{backgroundColor:'red'}}>
       <h1> Child Component 1</h1>
      <GrandChild1 />
       </div>
    )
}

export default childComponent1