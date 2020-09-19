import React, {useState} from 'react'

function HookCounterArray() {
    const [items, setItem] = useState([])

    const addItem = () =>{
        setItem([...items,{
            id: items.length + 1,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <button onClick={addItem}>Add item</button>
            <ul>
                {
                    items.map(item => (
                        <li key={item.id}>{item.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default HookCounterArray
