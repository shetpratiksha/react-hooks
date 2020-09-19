import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchingSingleData() {

    const [post, setpost] = useState({})
    const [id, setid] = useState(1)
    const [idFromButtonClick, setidFromButtonClick] = useState(1)

    const handleClick = () =>{
        setidFromButtonClick(id)
    }
    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then((res) =>{
            console.log(res);
            setpost(res.data)  
        })
        .catch((err)=>{
            console.log(err);  
        })
       
    }, [idFromButtonClick])
    return (
        <div>
            <input value={id} onChange={e=>setid(e.target.value)}/>
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
        </div>
    )
}

export default DataFetchingSingleData
