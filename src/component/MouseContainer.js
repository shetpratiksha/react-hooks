import React, {useState} from 'react'
import HookeMouseeventuseEffectOnce from './HookeMouseeventuseEffectOnce';

function MouseContainer() {

    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>Toggle</button>
            {display && <HookeMouseeventuseEffectOnce/>}
        </div>
    )
}

export default MouseContainer
