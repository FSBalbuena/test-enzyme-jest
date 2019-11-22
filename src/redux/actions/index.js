import {types} from './types'
import axios from 'axios'

const setPost=(data)=>({
    type:types.GET_POST,
    data
})

export const fetchPost = ()=>dispatch =>axios.get("https://jsonplaceholder.typicode.com/posts")
.then(res=>res.data)
.then(data=>dispatch(setPost(data)))