import { useEffect, useState } from 'react'
import Counter from './components/Counter/Counter'
import Toggle from './components/Toggle/Toggle'

function App() {
  
  function greetUser() {
    console.log("Hej med dig!")
  }

  useEffect(() => {
    greetUser();
  } ,[])

  return (
    <>
      <Counter></Counter>
      <Toggle></Toggle>
    </>
  )
}

export default App
