'use client'
import { useContext } from "react";
import { ThemeContext } from "@/components/use-context/UseContextWrapper";


export default function C({a}) {
    const { isDark } = useContext(ThemeContext);

    return (
        <div
            style = {{
                background: isDark ? "pink": "red", 
                height: "300px"
            }}
        >
            This is C component<br/>
        </div>
    )
}