import React, { useState } from 'react'
import Data from './Data'

function Testing() {
    const [data, setData] = useState([])
    const [input, setInput] = useState("")
    const dataHendler = () => {
        fetch("https://jsonplaceholder.typicode.com/comments").then((res) => {

            return res.json();
        }).then((res) => {
            console.log(res)
            setData(res)
        })
    }
    const hendleInput = (event) => {
        setInput(event.target.value)
        console.log(data)
        setData(data.filter((name) => name.name.includes(input)))
    }
    return (
        <div>
            <h1>Testing</h1>
            <input type="text" onChange={hendleInput} />
            <div>
                <button onClick={dataHendler}>Click</button>
            </div>
            <p>
                <ol>
                    <Data data={data} />

                </ol>
            </p>
        </div>
    )
}

export default Testing
