import React, {useState} from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incFive = () =>{
        for(var i=0;i<5;i++){
            setCount(a=>a+1)
        }
    }
    return (
        <div>
            Count: {count}
            <br/>
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(prevState => prevState + 1)}>Increment</button>
            <button onClick={()=>setCount(prevState => prevState - 1)}>Decrement</button>
            <button onClick={incFive}>incFive</button>
        </div>
    )
}

export default HookCounterTwo
