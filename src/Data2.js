import React,{useState} from 'react'
import Images from './Images'

function Data2() {
    const [data,setData]=useState([])
    const apiHendler=()=>{
        fetch('https://api.imgflip.com/get_memes').then(res=>{
            return(res.json())
        }).then(res=>{
            setData(res.data.memes)
        })
    }
   
    return (
        <div>
        <button onClick={apiHendler}>Click here</button>
        <Images data={data} />
        </div>
    )
}

export default Data2
