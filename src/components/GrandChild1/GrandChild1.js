import React from 'react'
import './GrandChild1.css'
const GrandChild1=({x , description,backgroundColor})=>{
    // console.log(props)
  //  const { heading,description}=props 
  // then rather using proos.heading and props.description we can directly use heading and description.
    return(
        <div className="GrandChild1"
         style={{backgroundColor:backgroundColor  }}>
            <h3>  {x}</h3>
            {description&&(<p>Description goes here - {description}</p>)}
            
             
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perferendis reiciendis possimus, non ex explicabo, a necessitatibus cupiditate temporibus nisi omnis obcaecati adipisci. Accusamus, consectetur. Consectetur, ut tenetur voluptates odio obcaecati quos doloribus, officia sint perferendis ducimus dignissimos earum numquam possimus reiciendis excepturi cumque aut distinctio. Earum natus dignissimos amet?</p>
        </div>
    )
}
export default GrandChild1 