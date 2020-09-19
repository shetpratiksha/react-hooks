import React, {useState, useEffect} from 'react'

function HookuseEffectCounter() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(()=>{
        console.log('updating document title')
        document.title = `clicked ${count} times`
    },[count])
    return (
        <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count +1 )}>clicked {count} times</button>
        </div>
    )
}

export default HookuseEffectCounter
