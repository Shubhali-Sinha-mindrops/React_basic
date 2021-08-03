/* import React, { useState } from 'react'

const UseStateArray = () => {

    const bioData = [
        {
            id: 0, name: "Neha", age: 28
        },
        {
            id: 1, name: "Vinay", age: 26
        },
        {
            id: 3, name: "Rohit", age: 32
        },
        {
            id: 4, name: "Rishav", age: 26  
        }
    ]

    const [myArray, setMyArray] = useState(bioData)

    const clearArray = () => {
        setMyArray([])
    }
    return (
        <>
            {
                myArray.map((data) => <h1 key = {data.id}>Name: {data.name} and age: {data.age}</h1>)
            }
            <button onClick = {clearArray}>Clear</button>
        </>
    )
}

export default UseStateArray
 */

//------------------------------three dots implementation----------------------------//
import React from 'react'

const UseStateArray = () => {

    const [myObject, setMyObject] = React.useState(
        {name: "Shubhali", age: 21, degree: "MCA",}
    );

    const change= () => {
        setMyObject({...myObject, name: "Anjali"})
    }
    return (
        <div>
            <h1>Name: {myObject.name}, age: {myObject.age}, degree: {myObject.degree}</h1>
            <button onClick={change}>Update</button>
        </div>
    )
}

export default UseStateArray
