import React, { useState, useEffect } from 'react'

const Resize = () => {

    const [widthCount, setWidthCount] = useState(window.screen.width)

    const actualWidth = () => {
        console.log(window.innerWidth)
        setWidthCount(window.innerWidth)
    }
    useEffect(() => {
        console.log("add event")
        window.addEventListener("resize", actualWidth)

        return () => {
            console.log("remove event")
            window.removeEventListener("resize", actualWidth)   // this will clean the previous changes that is stored in the memory which can crash our application also and show the last change
        }
    })
    return (
        <div>
            <h1>The actual size of the screen is:</h1>
            <h2>{widthCount}</h2>
        </div>
    )
}

export default Resize
