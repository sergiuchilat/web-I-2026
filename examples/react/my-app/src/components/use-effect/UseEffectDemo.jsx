'use client';

import { use, useEffect, useState } from "react";

export default function UseEffectDemo() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 5000);

        return () => {
            confirm("Component is about to unmount. Do you want to clean up the timer?");
            console.log("Component destroyed. Cleaning up timer...");
            clearInterval(intervalId); // <--- Crucial line!
        };
    }, []);

    useEffect(() => {
        console.log("Count has changed: ", count);
    }, [count]);

    useEffect(() => {
        console.log("Number has changed: ", number);
    }, [number]);

    useEffect(() => {
        console.log("Count or number has changed.");
    }, [count, number]); // This runs once because count and number start at 0 and we never change them in this effect

    useEffect(() => {
        console.log("This runs on every render, including the first one.");
    });



    return (
        <div>
            <h2>useEffect Demo</h2>
            <p>Count is: {count}</p>
            <p>Number is: {number}</p>
            <button onClick={() => setNumber(number + 1)}>Increment Number</button>
        </div>
    );
}