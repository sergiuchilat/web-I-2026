'use client';
import { useState } from "react";

export default function Counter() {

    const [counter, setCounter] = useState(5);

    const decrement = () => {
        setCounter(counter - 1);
    }
    const increment = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{counter}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}