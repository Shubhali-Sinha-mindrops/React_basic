import React, { useState } from 'react'

const TodoList = () => {
    const employees = [
        {
            id: 0, name: "Rishav", post: "Full Stack Developer"
        },
        {
            id: 1, name: "Vinay", post: "Full Stack Developer"
        },
        {
            id: 2, name: "Neha", post: "Front-end Developer"
        },
        {
            id: 3, name: "Shubhali", post: "Back-end Developer"
        }
    ]

    const [employeeData, setEmployeeData] = useState(employees)

    const clear = () => {
        setEmployeeData([])
    }

    const remove = (id) => {
        const newData = employeeData.filter((curelm) => {
            return curelm.id != id
        })
        setEmployeeData(newData)
    }

    return (
        <>
        {
            employeeData.map((data) => <h1 key = {data.id}>Name: {data.name}, post: {data.post}
            <button onClick = {() => remove(data.id)}>Delete</button>
            </h1>)
        }
        <button onClick= {clear}>Clear</button>
        </>
    )
}

export default TodoList
