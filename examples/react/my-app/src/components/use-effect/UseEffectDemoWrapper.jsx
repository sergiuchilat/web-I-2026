'use client';
import UseEffectDemo from "./UseEffectDemo";
import { useState } from "react";

export default function UseEffectDemoWrapper() {
    
    const [showDemo, setShowDemo] = useState(true);

    return (
        <div>

            <button onClick={() => setShowDemo(!showDemo)}>Toggle Demo</button>

            {showDemo && <UseEffectDemo />}
        </div>
    );
}