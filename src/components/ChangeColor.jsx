import { useState } from "react"
const ChangeColor = () => {
    const [display, setColor] = useState(true);
    return(
        <h1 style={{display: none ? '' : ''}}>Color <button onClick={()=>{setColor(!color)}}>change</button></h1>

    )
}

export default ChangeColor
