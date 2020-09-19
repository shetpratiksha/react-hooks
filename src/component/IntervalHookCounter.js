import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {

    const [count, setCount] = useState(0)

    const tick = () =>{
        console.log('timer here')
        setCount(count + 1)
    }
    
    useEffect(()=>{
        
        const timer = setInterval(tick,1000)

        return ()=>{
            console.log('clear timer here')
            clearInterval(timer)
        }
    },[count])
    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
