import React, { useState } from 'react'
import {v4} from "uuid"
import Modal from "react-modal"
import {FcBookmark} from "react-icons/fc"
import {TiPinOutline, TiPin} from "react-icons/ti"
import {VscBookmark} from "react-icons/vsc"

function Input({setKeep}) {

    const bookmarkArray = [
        "Home", "Assignment", "Work"
    ]
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [isPin, setIsPin] = useState(false)
    const [color, setColor] = useState("")
    const [bookMark, setBookMark] = useState("")
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [bookMarkList, setBookMarkList] = useState(bookmarkArray)

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          padding               : '2rem',
          backgroundColor       : 'rgb(230, 227, 227)',
          transform             : 'translate(-50%, -50%)'
        }
    };

    const addBookMark = (item) => {
        setBookMark(item);
        setModalIsOpen(false);
    }

    const addBtn = () => {
        const item = {
            id: v4(),
            title: title,
            desc: desc,
            isPin: isPin,
            color: color,
            bookMark: bookMark
        }
        setKeep(item)
        setTitle("")
        setDesc("")
        setIsPin("")
        setColor("")
        setBookMark("")
    }
    
    return (
        <div className="inputSection">
        <div className="inputCard" style={{backgroundColor: `${color}`}}>
            <div className="inputTitle">
                <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="inputField" style={{backgroundColor: `${color}`}}/>
                <button onClick={() => setIsPin(!isPin)} className="btn" style={{fontSize: "1.5rem"}}>{isPin ? <TiPin/> : <TiPinOutline/>}</button>
            </div>
            <input placeholder="Type a note..." value={desc} onChange={(e) => setDesc(e.target.value)} className="inputField desc" style={{backgroundColor: `${color}`}}/>
            <div className="inputActionBtns">
                <div>
                    <input type="color" id="favcolor" name="favcolor" value="#e76f51" onChange={(e) => setColor(e.target.value)}/>
                   <button className="btn" style={{fontSize: "1.3rem", marginLeft: "1rem"}} onClick={() => setModalIsOpen(true)}>{bookMark ? <FcBookmark/> : <VscBookmark/>}</button>
                    <Modal isOpen={modalIsOpen}  style={customStyles}>
                    <h1>Bookmarks</h1>
                    <ul>
                        {bookMarkList.map((item,index) => {
                            return <li key={index} onClick={() => addBookMark(item)} style={{cursor: "pointer"}}>{item}</li>
                        })}
                        <li onClick={() => {
                            return (
                                setBookMark(""), 
                                setModalIsOpen(false))}
                            } style={{cursor: "pointer"}}>
                            None
                        </li>
                    </ul>
                    </Modal>
                </div>
                <button onClick={addBtn} className="btn">Done</button>
            </div>
        </div>       
        </div>
    )
}

export default Input
