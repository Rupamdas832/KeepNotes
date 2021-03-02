import React, { useState } from 'react'
import {v4} from "uuid"
import Modal from "react-modal"
import {FcBookmark} from "react-icons/fc"
import {TiPinOutline, TiPin} from "react-icons/ti"
import {VscBookmark} from "react-icons/vsc"
import {FiDelete, FiPlusCircle} from "react-icons/fi"


function Input({setKeep,bookMarkList, setBookMarkList}) {

    
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [isPin, setIsPin] = useState(false)
    const [color, setColor] = useState("")
    const [selectedBookMark, setSelectedBookMark] = useState("")
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [isAddBookMark, setIsAddBookMark] = useState(false)
    const [bookMark, setBookMark] = useState("")

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          padding               : '2rem',
          backgroundColor       : 'rgb(209, 209, 209)',
          transform             : 'translate(-50%, -50%)'
        }
    };

    const addBookMark = (item) => {
        setSelectedBookMark(item);
        setModalIsOpen(false);
    }

    const addBtn = () => {
        if(title === "" || desc === ""){
            return alert("Please! Enter valid inputs")
        }
        const item = {
            id: v4(),
            title: title,
            desc: desc,
            isPin: isPin,
            color: color,
            selectedBookMark: selectedBookMark
        }
        setKeep(item)
        setTitle("")
        setDesc("")
        setIsPin("")
        setColor("")
        setSelectedBookMark("")
    }

    const addBookMarkItem = () => {
        if(bookMark === ""){
            return alert("Please! Enter valid bookmark")
        }
        setBookMarkList([...bookMarkList, bookMark])
        setBookMark("")
        setIsAddBookMark(false)
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
                   <button className="btn" style={{fontSize: "1.3rem", marginLeft: "1rem"}} onClick={() => setModalIsOpen(true)}>{selectedBookMark ? <FcBookmark/> : <VscBookmark/>}</button>
                    <Modal isOpen={modalIsOpen}  style={customStyles}>
                    <h1>Bookmarks</h1>
                    <ul>
                        {bookMarkList.map((item,index) => {
                            return <li  className="bookMark">
                            <h4 key={index} onClick={() => addBookMark(item)} style={{cursor: "pointer"}}>{item}</h4>
                            <button className="btn" style={{color: "red"}} onClick={() => setBookMarkList(bookMarkList.filter(bookmark => bookmark !== item))}><FiDelete/></button>
                            </li>    
                        })}
                        <li>
                        <h4 onClick={() => {
                            return (
                                setSelectedBookMark(""), 
                                setModalIsOpen(false))}
                            } style={{cursor: "pointer"}}>
                            None
                        </h4>
                        </li>
                    </ul>
                    {isAddBookMark && 
                        <div>
                        <input className="inputField" placeholder="Enter bookmark" onChange={(e) => setBookMark(e.target.value)}/>
                        <div className="bookMarkBtns"> 
                            <button onClick={addBookMarkItem} className="btn" style={{fontSize: "1.5rem"}}><FiPlusCircle/></button>
                        </div>
                        </div>
                    }
                    <div className="bookMarkBtns">
                        <button onClick={() => setIsAddBookMark(true)} className="btn">More</button>
                        <button onClick={() => {return (setModalIsOpen(false), setIsAddBookMark(false))}} className="btn">Cancel</button>
                    </div>
                    </Modal>
                </div>
                <button onClick={addBtn} className="btn">Done</button>
            </div>
        </div>       
        </div>
    )
}

export default Input
