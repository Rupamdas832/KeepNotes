import React, { useState } from 'react'
import {v4} from "uuid"
import Modal from "react-modal"
import {TiPinOutline, TiPin} from "react-icons/ti"
import {VscBookmark} from "react-icons/vsc"

function Input({setKeep}) {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [isPin, setIsPin] = useState(false)
    const [color, setColor] = useState("")
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };

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
    const openModal = () => {
        setModalIsOpen(true)
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
                <div>
                    <input type="color" id="favcolor" name="favcolor" value="#e76f51" onChange={(e) => setColor(e.target.value)}/>
                    <button className="btn" style={{fontSize: "1.3rem", marginLeft: "1rem"}} onClick={openModal}><VscBookmark/></button>
                    <Modal isOpen={modalIsOpen} style={customStyles}>
                    <h1>I m modal</h1>
                    <button onClick={() => setModalIsOpen(false)}>Close</button>
                    </Modal>
                </div>
                <button onClick={addBtn} className="btn">Done</button>
            </div>
        </div>       
        </div>
    )
}

export default Input
