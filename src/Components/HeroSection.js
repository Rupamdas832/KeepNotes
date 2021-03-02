import React, { useEffect, useState } from 'react'
import DisplayList from './DisplayList'
import Header from './Header'
import Input from './Input'

function HeroSection() {

    const bookmarkArray = [
        "Home", "Assignment", "Work"
    ]

    const [keep, setKeep] = useState("")
    const [keepList, setKeepList] = useState([])
    const [bookMarkList, setBookMarkList] = useState(bookmarkArray)

    useEffect(() => {
        setKeepList([...keepList, keep])   
    },[keep])

    useEffect(() => {
        const list1 = localStorage.getItem("keepNotes")
        const list2 = localStorage.getItem("bookMarks")
        if(list1){
            setKeepList(JSON.parse(list1))
        }
        if(list2){
            setBookMarkList(JSON.parse(list2))
        }
    },[])

    useEffect(() => {
        localStorage.setItem("keepNotes", JSON.stringify(keepList))
        localStorage.setItem("bookMarks", JSON.stringify(bookMarkList))
    },[keepList,bookMarkList])
    return (
        <div>
        <Header/>
            <Input setKeep={setKeep} bookMarkList={bookMarkList} setBookMarkList={setBookMarkList}/>
            <DisplayList keepList={keepList} setKeepList={setKeepList}/>
        </div>
    )
}

export default HeroSection
