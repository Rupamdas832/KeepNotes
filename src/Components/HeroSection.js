import React, { useEffect, useState } from 'react'
import DisplayList from './DisplayList'
import Input from './Input'

function HeroSection() {
    const [keep, setKeep] = useState("")
    const [keepList, setKeepList] = useState([])

    useEffect(() => {
        setKeepList([...keepList, keep])
    },[keep])
    return (
        <div>
            <Input setKeep={setKeep}/>
            <DisplayList keepList={keepList} setKeepList={setKeepList}/>
        </div>
    )
}

export default HeroSection
