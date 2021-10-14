import React from 'react'
import "./Images.css"

function Images(props) {
    
    return (
        <div>
       {props.data.map((data)=><div  className=""><h4 className="primary">{data.name}</h4><img src={data.url} height={data.height} width={data.width} key={data.id} /></div>)}
        </div>
    )
}

export default Images