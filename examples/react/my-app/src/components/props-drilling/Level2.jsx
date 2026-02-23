import Level3 from "./Level3";

export default function Level2({counter}) {
    return (
        <div>
            <h2>Level 2</h2>
            <p>Counter value: {counter}</p>
            <Level3 counter={counter + 1} />
        </div>
    )
}