import { useState } from "react";

function Comment() {
const [content, setContent] = useState('')
const [Com, setCom] = useState([
    {content:'1',id: Math.random()},
    {content:'2',id: Math.random()},
  ])

  const addCom=(content)=>{
    content.preventDefault()
    setCom(...Com,{content,id: Math.random()})
    setContent('')
  }

  return (
   <div>
    
      <ul style={{ listStyleType: "none" }}>
        <li style={{ position: "absolute", left: '780px', top: '600px' }}>{Com}</li>
      </ul>
    </div>
  )
}
 

export default Comment

//update Comment.jsx
