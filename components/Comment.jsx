import { useState } from "react";

function Comment() {
const [content, setContent] = useState('')
const [Com, setCom] = useState([
    {content:'1',id: Math.random()},
    {content:'2',id: Math.random()}
  ])

  const addCom=(content)=>{
    content.preventDefault()
    setCom(...Com),{content,id: Math.random()}
    setContent('')
  }

  return (
    <form className="rightDown" onSubmit={addCom}>
      <input type="text" placeholder="輸入" value={content} onChange={(e) => { setCom(e.target.value) }} style={{ position: "absolute", left: '780px', top: '540px' }} />
      <button type="submit" style={{ position: "absolute", left: '1020px', top: '540px' }}>加入</button>
      <ul style={{ listStyleType: "none" }}>
        <li style={{ position: "absolute", left: '780px', top: '600px' }}>{Com[0]}</li>
      </ul>
    </form>
  )
}
 

export default Comment

//update Comment