import NavBar from "@/components/NavBar";
import Counter from "../../components/use-state/Counter";
export default function UseStatePage() {
    return (
        <div>
            <NavBar/>
            <h1>useState Hook</h1>
            <p>This page will demonstrate the use of the useState hook in React.</p>
            <Counter/>
        </div>
    )
}