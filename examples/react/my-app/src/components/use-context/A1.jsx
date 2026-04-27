import { useContext } from "react";
import { PageContext } from "@/components/use-context/UseContextWrapper"; // ✅ import

export default function A1() {
    
    const valueOfA = useContext(PageContext)

    return (
        <div 
            style = {{"background": "lightblue", "height": "300px"}}
        >
            This is A1 subcomponent <br/>
        </div>
    )
}