import React,{useState} from 'react'
import "./Data.css"


function Data(props) {

    return (
        <div>
           {props.data.map(data=><li className="list">{data.name}--{data.email}</li>)} 
        </div>
    )
}

export default Data
