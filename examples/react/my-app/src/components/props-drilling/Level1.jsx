import Level2 from "./Level2";

export default function Level1({counter}){
    return (
        <div>
            <h2>Level 1</h2>
            <p>Counter value: {counter}</p>
            <Level2 counter={counter + 1} />
        </div>
    )
}