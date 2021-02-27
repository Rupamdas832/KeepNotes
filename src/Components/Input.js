import React, { useState } from 'react'
import {v4} from "uuid"

function Input({setKeep}) {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [isPin, setIsPin] = useState(false)
    const [color, setColor] = useState("")

    const addBtn = () => {
        const item = {
            id: v4(),
            title: title,
            desc: desc,
            isPin: isPin,
            color: color
        }
        setKeep(item)
        setTitle("")
        setDesc("")
        setIsPin("")
        setColor("")
    }
    return (
        <div style={{backgroundColor: `${color}`}}>
            <input placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input placeholder="Enter desc" value={desc} onChange={(e) => setDesc(e.target.value)}/>
            <input type="color" id="favcolor" name="favcolor" value="#e63946" onChange={(e) => setColor(e.target.value)}/>
            <button onClick={() => setIsPin(!isPin)}>Pin</button>
            <button onClick={addBtn}>ADD</button>
        </div>
    )
}

export default Input
