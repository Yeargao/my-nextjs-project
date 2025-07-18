import { useState } from "react";

function Comment() {
  const [Com, setCom] = useState([])

  return (
    <form>
      <input type="text" placeholder="輸入" value={Com} onChange={(e) => { setCom(e.target.value) }} style={{ position: "absolute", left: '780px', top: '540px' }} />
      <button type="submit" style={{ position: "absolute", left: '1020px', top: '540px' }}>加入</button>
      <ul style={{ listStyleType: "none" }}>
        <li style={{ position: "absolute", left: '780px', top: '600px' }}>
          {Com}
        </li>
      </ul>
    </form>
  )
}

export default Comment