import { useState } from "react";
import Enemy from "./Enemy";
import Tower from "./Tower";

export default function First() {
    const [MB, setMB] = useState(false);
    const One = () => {
        return (
            <div style={{ whiteSpace: 'nowrap' }}>
                <button onClick={() => setMB(1)} style={{ position: 'absolute', width: '695px', height: '670px', left: '0px', top: '0px', fontSize: '60px' }}>防禦塔目錄</button>
                <button onClick={() => setMB(2)} style={{ position: 'absolute', width: '695px', height: '670px', left: '695px', top: '0px', fontSize: '60px' }}>敵人目錄</button>
            </div>
        );
    }

    const EorT = () => {
        if (MB == 1) {
            return (
                <>
                    <Tower />
                    <button onClick={() => setMB(false)}> <img src="images/goback.png" width="180px" height="180px" style={{ background: 'none', border: 'none', position: 'absolute', left: '1030px', top: '0px' }} alt="goback" /></button>
                </>
            )
        }
        return (
            <>
                <Enemy />
                <button onClick={() => setMB(false)}> <img src="images/goback.png" width="180px" height="180px" style={{ background: 'none', border: 'none', position: 'absolute', left: '1030px', top: '0px' }} alt="goback" /></button>
            </>
        )
    }

    return MB ? <EorT /> : <One />;
}

