import React, { useEffect, useState } from 'react'
import {FaTrashAlt} from "react-icons/fa"

function DisplayList({keepList, setKeepList}) {

    const [pinList, setPinList] = useState([])
    const [genList, setGenList] = useState([])
    
    useEffect(() => {
        const _pinList = keepList.filter(item => item.isPin === true)
        const _genList = keepList.filter(item => item.isPin !== true)
        setPinList(_pinList)
        setGenList(_genList)
    },[keepList])

    const delBtn = (id) => {
        setKeepList(keepList.filter(item => item.id !== id))
    }
    return (
        <div className="keepList">
        <h1 className="subHeading">Pinned Notes</h1>
            <div className="pinKeeps">
                {pinList && pinList.map((keep, index) => {
                    return <div key={index} style={{backgroundColor: `${keep.color}`}} className="keep pin">
                        <h1>{keep.title}</h1>
                        <p>{keep.desc}</p>
                        <div className="actionBtns">
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
                        <p>{keep.desc}</p>
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
