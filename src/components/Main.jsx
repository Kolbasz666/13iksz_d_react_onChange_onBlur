import { useEffect } from "react"
import { useState } from "react"

function Main({ bg_color }) {
    const [sideA, setSideA] = useState(0)
    const [sideB, setSideB] = useState(0)
    const [radius, setRadius] = useState(0)

    function PositiveRadius(number) {
        if (number >= 0)
            return setRadius(number)
        setRadius(0)
    }

    useEffect(() => {
        setSideA(10)
        setSideB(10)
    }, [])

    return <main style={{ backgroundColor: bg_color }}>
        <section>
            <h2>Terület számítás: téglalap</h2>
            <input type="number" min={0} value={sideA} onChange={(e) => setSideA(e.target.value)} placeholder="egyik oldal" />
            <input type="number" min={0} value={sideB} onChange={(e) => setSideB(e.target.value)} placeholder="másik oldal" />
            <p>Eredmény: {sideA * sideB}</p>
        </section>
        <section>
            <h2>Terület számítás: kör</h2>
            <input type="number" min={0} value={radius} onBlur={(e) => {
                if (e.target.value < 0)
                    setRadius(0)
            }} onChange={(e) => PositiveRadius(e.target.value)} />
            <p>Terület: {radius * radius * Math.PI}</p>
        </section>
    </main>
}

export default Main