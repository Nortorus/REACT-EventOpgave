import { useState } from "react"

const Toggle = () => {

    const [visibility, setVisibility] = useState(true);

    function toggleVisibility() {
        setVisibility(!visibility)
    }

  return (
    <>
      <button onClick={toggleVisibility}>Toggle knap</button>
      {visibility && <p>Denne tekst er synlig</p>}
    </>
  )
}

export default Toggle
