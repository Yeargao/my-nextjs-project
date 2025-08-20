import { useState, useRef } from "react";
export default function Tower() {

    const [I, setI] = useState("");//輸入要新增的
    const [E, setE] = useState("");//要改成什麼
    const [O, setO] = useState([]);//all
    const [L, setL] = useState(0);//位置

    const getO = () => {
        setO([...O, I]);
    };

    const deleteO = (location) => {
        O.splice(location, 1);
        setO([...O]);
    }

    const editO = (i,j) => {
        if (j == true) {
            O.splice(i - 1, 1, E);
            setO([...O]);
            setL(0);
            setE("")
        }
        else {
            setL(0);
            setE("")
        }
    }

    const Comment = () => {
        return (
            <ul style={{ listStyleType: "none" }}>
                {Array.from({ length: O.length }, (_, i) => (
                    <li key={i}>
                        <h2 style={{ background: "none", position: "absolute", left: "0px", top: `${40 * i}px`, width: "100px", height: "30px" }} >{O[i]}</h2>
                        <button onClick={() => deleteO(i)} style={{ background: "none", position: "absolute", left: "120px", top: `${40 + 40 * i}px`, width: "100px", height: "30px" }} >刪除</button>
                        <button onClick={() => setL(i + 1)} style={{ background: "none", position: "absolute", left: "240px", top: `${40 + 40 * i}px`, width: "100px", height: "30px" }} >編輯</button>
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <div>
            <input value={I} onChange={(e) => setI(e.target.value)}
                style={{ position: "absolute", left: "0px", top: "0px", width: "100px", height: "30px" }} />
            <button onClick={() => getO()} style={{ background: "none", position: "absolute", left: "120px", top: "0px", width: "100px", height: "30px" }} >新增</button>
            <Comment />
            {L == 0 ? <></> :
                <>
                    <input value={E} onChange={(e) => setE(e.target.value)}
                        style={{ position: "absolute", left: "0px", top: `${40 * L}px`, width: "100px", height: "30px" }} />
                    <button onClick={() => { editO(L,false); }} style={{ background: "none", position: "absolute", left: "360px", top: `${40 * L}px`, width: "100px", height: "30px" }}>不編輯了</button>
                    <button onClick={() => { editO(L,true); }} style={{ position: "absolute", left: "240px", top: `${40 * L}px`, width: "100px", height: "30px" }}>編輯啦</button>
                </>
            }
        </div>
    )
}
