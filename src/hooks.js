//---------------------useState Hook --------------------//

/* 
import React, { useState } from 'react';
import { Resturant } from './Components/Basics/resturant'

const Hooks = () => {
  //var val = "Shubhali Sinha App ";
  console.log(useState('Mindrops solutions'));

 const [myName, setMyName] = useState( "Shubhali Sinha App" );

 console.log(myName);
  
  const changeName = () => {
   // val  = "Mindrops app";
   // console.log(val);
   setMyName('Mindrops pvt. ltd.')
  }

  //console.log(val);
  return (
    <div className = "myClass1">
      <h2> Hello {0+1} user,</h2>
      <p>You are now visiting my first web page</p>
      <MyName />
      <MyName />      
      <Resturant />

     <h1>{ myName }</h1>
    <button onClick={changeName}>Click Here!</button> 
    </div>
  )
}

const MyName = () => {                             //This is an example of nested components.
  return <h1>Shubhali Sinha</h1>
}

export default Hooks; */


//--------------------------------useEffect Hook -------------------------//

import React, { useState, useEffect } from 'react'

const Hooks = () => {

  const [num, setNum] = useState(0)
  const [nums, setNums] = useState(0)


  useEffect(() => {                            //this will execute, if any button is clicked.
    alert("Button is clicked!")
    console.log('I am clicked....Save Me for next...It is hurtful...Save me...')
  }, [num])                                          //If you want to exceute it for only first time then pass [] after comma.

  return (
    <div>    
    <button onClick = { () => {setNum(num + 1)}}>Click me</button>     
    <h1> {num} </h1>

    <br/>

    <button onClick = { () => {setNums(nums - 1)}}>Click me</button>
    <h1> {nums} </h1> 
    </div>
  )
}

export default Hooks
