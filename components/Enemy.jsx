import { useState, useRef } from "react";
import axios from "axios";

function Enemy() {
  const [right, setRight] = useState([]);
  const [N, setN] = useState(3);
  const [P, setP] = useState(1);
  const audioRef = useRef(null);

  const getP = async (p) => {
    audioRef.current.play();
    let pp = P + p;
    if (pp > 0 && pp < 9) {
      setP(pp);
    }
  };

const getN = async (n) => {
    audioRef.current.play();
    setN(2 + n + 16 * (P - 1));
    const NewN = 2 + n + 16 * (P - 1);
    let li = ["A" + NewN, "B" + NewN, "C" + NewN, "D" + NewN, "E" + NewN, "F" + NewN, "G" + NewN, "H" + NewN, "I" + NewN, "J" + NewN];
    const jsonLi = encodeURIComponent(JSON.stringify(li));
    try {
      const response = await axios.post(`/api/todos?id=${jsonLi}`);
      setRight(response.data);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  const Li = () => {
    const a = [780, 280];
    return (
      <ul style={{ listStyleType: "none" }}>
        {Array.from({ length: 4 }, (_, i) =>
          Array.from({ length: 2 }, (_, j) => (
            <li key={2 * i + j} style={{ position: "absolute", left: `${a[0] + 240 * j}px`, top: `${a[1] + 65 * i}px` }}>
              {right[2 * i + j]}
            </li>
          ))
        )}
      </ul>
    );
  }

  const Bu = () => {
    const a = [250, 125];
    return (
      <div>
        {Array.from({ length: 4 }, (_, i) =>
          Array.from({ length: 4 }, (_, j) => (
            <button key={4 * i + j} onClick={() => getN(4 * i + j + 1)} style={{ background: "none", border: "none", position: "absolute", left: `${a[0] + 100 * j}px`, top: `${a[1] + 100 * i}px` }}>
              <img src={`images/4-${16 * (P - 1) + 4 * i + j + 1}.webp`} alt="button" />
            </button>
          ))
        )}
      </div>
    );
  }

  return (
    <div style={{ whiteSpace: 'nowrap' }}>
        <img src='images/back.png' style={{ position: 'absolute', width: '1400px', height: '670px', left: '0px', top: '0px', right: '0px', bottom: '0px' }} />
        <button onClick={() => setMB(false)}> <img src='images/goback.png' width='180px' height='180px' style={{ background: 'none', border: 'none', position: 'absolute', left: '1030px', top: '0px' }} /></button >
        <div style={{ color: 'brown' }}>
            <h3 style={{ position: 'absolute', left: '880px', top: '170px', textAlign: 'center', fontSize: '35px' }}>{right[0]}</h3>
            <h3 style={{ position: 'absolute', left: '405px', top: '480px', fontSize: '60px' }}>{P}/8</h3>
            <h3 style={{ position: 'absolute', left: '385px', top: '-30px', fontSize: '60px' }}>敵人</h3>
            <Li />
        </div>
        <audio ref={audioRef} src="./images/大聲.mp3" />
        <Bu />
        <button onClick={() => getP(1)} style={{ background: 'none', border: 'none', position: 'absolute', left: '500px', top: '540px', opacity: '1' }}>
            <img src='images/right.png' width='110px' height='67px' />
        </button>
        <button onClick={() => getP(-1)} style={{ background: 'none', border: 'none', position: 'absolute', left: '265px', top: '540px', opacity: '1' }}>
            <img src='images/left.png' width='110px' height='67px' />
        </button>
        <img src={`images/4-${N - 2}.webp`} width='130px' height='130px' style={{ position: 'absolute', left: '890px', top: '60px' }} />
        <button type="submit" style={{ position: "absolute", left: '1020px', top: '540px' }}>加入</button>
    </div>
)
}

export default Enemy
