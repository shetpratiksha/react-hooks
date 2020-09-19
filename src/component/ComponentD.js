import React, {useContext} from 'react'
import {CountContext} from '../App.js'

function ComponentD() {
    const countContext = useContext(CountContext)
    return (
        <div>
            <button onClick={()=>countContext.countDispatch('increment')}>INC</button>
            <button onClick={()=>countContext.countDispatch('decrement')}>DEC</button>
            <button onClick={()=>countContext.countDispatch('reset')}>RESET</button>
        </div>
    )
}

export default ComponentD
