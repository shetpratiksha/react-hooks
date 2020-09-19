import React, {useState, useEffect} from 'react'

function HookeMouseeventuseEffectOnce() {
    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)

    const logMousePosition = (e) =>{
        console.log('mouse position')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('mouse event useEffect')
        window.addEventListener('mousemove',logMousePosition)

        return () =>{
            console.log('unmounted event listener')
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
    return (
        <div>
            Hook mouseover {X} and {Y}
            
        </div>
    )
}

export default HookeMouseeventuseEffectOnce
