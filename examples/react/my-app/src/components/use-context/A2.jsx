import { useContext } from "react";
import { PageContext } from "@/components/use-context/UseContextWrapper";

export default function A2() {
    return (
        <div 
            style = {{"background": "darkblue", "height": "300px"}}
        >
            This is A2 subcomponent <br/>
        
        </div>
    )
}