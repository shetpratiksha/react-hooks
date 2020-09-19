import React, {useState,useEffect} from 'react'
import axios from 'axios'

function DataFetchingOne() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [posts, setPosts] = useState({})

    useEffect(() =>{
        axios
        .get('https://jsonplaceholder.typicode.com/posts/1')
        .then((res) =>{
            console.log(res);
            setLoading(false)
            setPosts(res.data) 
            setError('') 
        })
        .catch((err)=>{

            console.log(err);
            setLoading(false) 
            setPosts({}) 
            setError('Error!! Something went wrong') 
            
        })
    },[])
    return (
        <div>
            {loading ? 'Loading ...' : posts.title}
            {error ? error : null}
        </div>
    )
}

export default DataFetchingOne
