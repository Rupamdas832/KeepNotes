import React, { useEffect, useState } from 'react'
import {FaTrashAlt,FaEdit} from "react-icons/fa"

function DisplayList({keepList, setKeepList}) {

    const [pinList, setPinList] = useState([])
    const [genList, setGenList] = useState([])
    const [keepToChange, setKeepToChange] = useState("")
    const [editTitle, setEditTitle] = useState("")
    const [editDesc, setEditDesc] = useState("")
    
    useEffect(() => {
        const _pinList = keepList.filter(item => item.isPin === true)
        const _genList = keepList.filter(item => item.isPin !== true)
        setPinList(_pinList)
        setGenList(_genList)
    },[keepList])

    const delBtn = (id) => {
        setKeepList(keepList.filter(item => item.id !== id))
    }
    const saveChanges = (id) => {
        const foundId = keepList.findIndex((item) => item.id === id)
        console.log(keepList[foundId])
        if(foundId){
            keepList[foundId].title = editTitle;
            keepList[foundId].desc = editDesc;
            setKeepList([...keepList])
            setKeepToChange("")
            setEditTitle("")
            setEditDesc("")
        }
        else{
            alert("Please click valid note")
        }
    }
    return (
        <div className="keepList">
        <h1 className="subHeading">Pinned Notes</h1>
            <div className="pinKeeps">
                {pinList && pinList.map((keep, index) => {
                    return <div key={index} style={{backgroundColor: `${keep.color}`}} className="keep pin">
                        {keepToChange === keep.id ? (
                            <div>
                                <input value={editTitle} className="inputField" style={{backgroundColor: `${keep.color}`, borderBottom: "1px solid black"}} onChange={(e) => setEditTitle(e.target.value)}/>
                                <input value={editDesc} className="inputField desc" style={{backgroundColor: `${keep.color}`}} onChange={(e) => setEditDesc(e.target.value)}/>
                            </div>
                        ) : (
                            <div>
                            <h1 style={{textTransform: "uppercase"}}>{keep.title}</h1>
                            <h3 style={{color: "rgb(54, 54, 54)", fontWeight: "normal"}}>{keep.desc}</h3>
                            {keep.bookMark && <div className="bookmarkDisplay"><h3>{keep.bookMark}</h3></div>}
                            </div>
                        )}
                        
                        <div className="actionBtns">
                        {keepToChange === keep.id ? (<button className="btn" style={{marginRight: "1rem"}} onClick={() => saveChanges(keep.id)}>Done</button>) : (
                            <button className="btn" style={{marginRight: "1rem"}} onClick={() =>{return (
                                setKeepToChange(keep.id), 
                                setEditTitle(keep.title), 
                                setEditDesc(keep.desc))
                                }}><FaEdit/>
                            </button>
                            )}
                        <button onClick={() => delBtn(keep.id)} className="btn"><FaTrashAlt/></button>
                        </div>
                    </div>
                })}
            </div>
            <h1 className="subHeading">General Notes</h1>
            <div className="genKeeps">
                {genList && genList.map((keep, index) => {
                    return <div key={index} style={{backgroundColor: `${keep.color}`}} className="keep">
                        <h1>{keep.title}</h1>
                        <h3 style={{color: "rgb(54, 54, 54)", fontWeight: "normal"}}>{keep.desc}</h3>
                        {keep.bookMark && <div className="bookmarkDisplay"><h3>{keep.bookMark}</h3></div>}
                        <div className="actionBtns">
                        <button onClick={() => delBtn(keep.id)} className="btn"><FaTrashAlt/></button>
                        </div>
                        
                    </div>
                })}
            </div>
        </div>
    )
}

export default DisplayList
