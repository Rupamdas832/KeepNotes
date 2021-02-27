import React from 'react'

function DisplayList({keepList, setKeepList}) {

    const delBtn = (id) => {
        setKeepList(keepList.filter(item => item.id !== id))
    }
    return (
        <div className="keepList">
            {keepList && keepList.map((keep, index) => {
                return <div key={index} style={{backgroundColor: `${keep.color}`}} className="keep">
                    <h1>{keep.title}</h1>
                    <p>{keep.desc}</p>
                    <button onClick={() => delBtn(keep.id)}>Delete</button>
                </div>
            })}
        </div>
    )
}

export default DisplayList
