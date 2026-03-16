import NavBar from "@/components/NavBar";
import UseEffectDemoWrapper from "../../components/use-effect/UseEffectDemoWrapper";

export default function UseEffectPage() {
    return (
        <div>
            <NavBar/>
            <h1>useEffect Hook</h1>
            <p>This page will demonstrate the use of the useEffect hook in React.</p>
            <UseEffectDemoWrapper/>
        </div>
    )
}