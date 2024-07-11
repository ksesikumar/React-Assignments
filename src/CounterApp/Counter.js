import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);


    const increament = () => {
        setCount(count + 1);
    }

    const decreament = () => {
        setCount(count - 1);
    }
    
    return (
        <div>
            <h1>Counter: { count }</h1>
            <button onClick={increament}> Increament</button>
            <button onClick={decreament}>Decreament</button>
        </div>
        
    );



}

export default Counter;