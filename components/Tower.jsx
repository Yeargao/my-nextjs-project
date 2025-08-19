import { useState, useRef } from "react";
export default function Tower() {

    const [I, setI] = useState("");
    const [E, setE] = useState("");
    const [O, setO] = useState([]);

    const getO = () => {
        setO([...O,I]);
    }; 

    const deleteO = (location) => {
        O.splice(location, 1);
        setO([...O]);
    }

    const editO = (location) => {
        O.splice(location, 1,E);
        setO([...O]);
    }

    const Comment = () => {
        return (
            <ul style={{ listStyleType: "none" }}>
                {Array.from({ length: O.length }, (_, i) =>(
                    <li key={i}>
                        <h2 style={{ background: "none", position: "absolute", left: "0px", top: `${40 * i}px`, width: "100px", height: "30px" }} >{O[i]}</h2>
                        <button onClick={() => deleteO(i)} style={{ background: "none", position: "absolute", left: "120px", top: `${40 + 40 * i}px`, width: "100px", height: "30px" }} >新</button>
                        <button onClick={() => editO(i)} style={{ background: "none", position: "absolute", left: "240px", top: `${40 + 40 * i}px`, width: "100px", height: "30px" }} ></button>
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <div>
            <input value={I} onChange={(e) => setI(e.target.value)}
                style={{ position: "absolute", left: "0px", top: "0px", width: "100px", height: "30px" }} />
            <button onClick={() => getO()} style={{ background: "none", position: "absolute", left: "120px", top: "0px", width: "100px", height: "30px" }} ></button>
            <input value={E} onChange={(e) => setE(e.target.value)}
                style={{ background: "none", position: "absolute", left: "240px", top: "0px", width: "100px", height: "30px" }} />
            <Comment />
        </div>
    )
}
