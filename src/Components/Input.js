import React, { useState } from 'react'
import {v4} from "uuid"
import {TiPinOutline, TiPin} from "react-icons/ti"

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
        <div className="inputSection">
        <div className="inputCard" style={{backgroundColor: `${color}`}}>
            <div className="inputTitle">
                <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="inputField" style={{backgroundColor: `${color}`}}/>
                <button onClick={() => setIsPin(!isPin)} className="btn">{isPin ? <TiPin/> : <TiPinOutline/>}</button>
            </div>
            <input placeholder="Type a note..." value={desc} onChange={(e) => setDesc(e.target.value)} className="inputField desc" style={{backgroundColor: `${color}`}}/>
            <div className="inputActionBtns">
                <input type="color" id="favcolor" name="favcolor" value="#e76f51" onChange={(e) => setColor(e.target.value)}/>
                <button onClick={addBtn} className="btn">Done</button>
            </div>
        </div>       
        </div>
    )
}

export default Input
