import React, {useState, useEffect} from 'react'
import axios from 'axios'

const TestFile = () => {

    const [num, setNum] = useState()
    const [name, setName] = useState()
    const [moves, setMoves] = useState()

    useEffect(() => {
        async function getData() {
            const res = await axios.get(`http://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(res.data.name)
            setName(res.data.name)
            setMoves(res.data.moves.length)
        }
        getData()
    })
    
    return (
        <>
        <h1>You choose <span style = {{color: "gray"}}> {num} </span>value </h1>
        <h1>My name is <span style = {{color: "gray"}}> {name} </span>name </h1>
        <h1>I have <span style = {{color: "gray"}}> {moves} </span>moves </h1>

            <select value = {num} onChange = {(event) => {
                setNum(event.target.value)
            }}>
                <option value = '1'>1</option>
                <option value = '3'>3</option>
                <option value = '4'>4</option>
                <option value = '5'>5</option>
                <option value = '25'>25</option>
            </select>
        </>
    )
}

export default TestFile
