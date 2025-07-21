import { useState } from "react";

function Comment() {
const [content, setContent] = useState('')
const [Com, setCom] = useState([
    {content:'1',id: Math.random()},
    {content:'2',id: Math.random()}
  ])

  const addCom=(content)=>{
    content.preventDefault()
    setCom(...Com,{content,id: Math.random()})
    setContent('')
  }

  return (
   <div>
    <form className="rightDown" onSubmit={addCom}>
      <input type="text" placeholder="輸入" value={content} onChange={(e) => { setContent(e.target.value) }} style={{ position: "absolute", left: '780px', top: '540px' }} />
      <button type="submit" style={{ position: "absolute", left: '1020px', top: '540px' }}>加入</button>
    </form>
      <ul style={{ listStyleType: "none" }}>
        <li style={{ position: "absolute", left: '780px', top: '600px' }}>{Com}</li>
      </ul>
    </div>
  )
}
 

export default Comment

//update Comment.jsx
