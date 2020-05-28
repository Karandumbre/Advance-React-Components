import React from 'react'
import CountUp, { useCountUp } from 'react-countup';
function Countup() {
    const { countUp, start, pauseResume, reset, update } = useCountUp({ duration: 5, end: 1000, startOnMount: false })
    return (
        <div>
            <h1>
                {countUp}
            </h1>
            <button onClick={start}>start</button>
            <button onClick={pauseResume}>pauseResume</button>
            <button onClick={reset}>reset</button>
            <button onClick={() => update(2000)}>update</button>

            <h3>
                <CountUp end={200} />

            </h3>
            <h3>
                <CountUp end={300} duration={5} />

            </h3>

            <h3>
                <CountUp start={250} end={300} duration={5} />

            </h3>
            <h3>
                <CountUp end={1000} duration={5} prefix="$" decimals={2} />

            </h3>

            <h3>
                <CountUp end={1000} duration={5} suffix="USD" decimals={2} />

            </h3>


            <br />

            <br />


        </div>
    )
}

export default Countup
