import { useState } from "react"

const User = ({ name }) => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>{name}</h1>
            <p>Location : Kodungallur</p>
            <p>Contact : 8921834447</p>
            <button onClick={() => {
                setCount(count - 1)
            }}>-</button>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count + 1)
            }}>+</button>
        </div>
    )
}

export default User