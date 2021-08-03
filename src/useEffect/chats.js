import React, { useState, useEffect } from 'react'

const Chats = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("I am first")
        if (count >= 1){                                        //It will execute when the value of count variable changes
        console.log(`Hello, you have ${count} new messages`)
        document.title = `Chats (${count})`                         
        }
        else {
            console.log('Hey');
            document.title = `Chats`
        }
    }, [count])

    useEffect(() => {
        alert("Heyy, are you here for first time?")
        console.log("First load")                               //It will execute when the page is loaded for the first time.
    }, [])

    return (
        <>
        <h1>{count}</h1>
        <button onClick ={ () => setCount(count+1)}>Click</button>
        </>
    )
}

export default Chats
