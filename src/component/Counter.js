import React from 'react';
const Counter=()=>{
    const increamentCounter=()=>{
        console.log(0 + 1)
    }
    return(
        <div className='Counter'>
            <h2>Counter</h2>
            <h3 style={{fontSize:'15em', margin:'0'}}>0</h3>
<button onClick={increamentCounter}>increament</button>
        </div>
    );
}
export default Counter;