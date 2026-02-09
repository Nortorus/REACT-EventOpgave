import { useEffect, useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(0);

    function clicker(){
        setCount(count + 1)
    }

    function reset() {
        setCount(0)
    }

    useEffect(() => {
        console.log(`Der blivet klikket ${count} gange!`);
        document.title = `Klikket ${count} gange!`;
    }, [count])
    
  return (
    <>
      <button onClick={clicker}>Klik!!!</button>
      <button onClick={reset}>Nulstil</button>
      <p>Du har klikket {count} gange!</p>
    </>
  )
}

export default Counter
