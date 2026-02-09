import { useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(0);

    function clicker(){
        setCount(count + 1)
    }

    function reset() {
        setCount(count == 0)
    }
    
  return (
    <>
      <button onClick={clicker}>Klik!!!</button>
      <button onClick={reset}>Nulstil</button>
      <p>Du har klikket {count} gange!</p>
    </>
  )
}

export default Counter
