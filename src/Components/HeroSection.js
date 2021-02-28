import React, { useEffect, useState } from 'react'
import DisplayList from './DisplayList'
import Header from './Header'
import Input from './Input'

function HeroSection() {
    const [keep, setKeep] = useState("")
    const [keepList, setKeepList] = useState([])

    useEffect(() => {
        setKeepList([...keepList, keep])
    },[keep])
    return (
        <div>
        <Header/>
            <Input setKeep={setKeep}/>
            <DisplayList keepList={keepList} setKeepList={setKeepList}/>
        </div>
    )
}

export default HeroSection
