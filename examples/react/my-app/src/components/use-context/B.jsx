'use client'
import { useContext } from "react";
import { ThemeContext } from "@/components/use-context/UseContextWrapper";

export default function B() {
    const { isDark } = useContext(ThemeContext);

    return (
        <div style={{
            background: isDark ? "#2d2d2d" : "#fff3e8",
            color: isDark ? "#ffffff" : "#000000",
            padding: "20px",
            borderRadius: "8px",
            transition: "all 0.3s"
        }}>
            This is B component <br/>
            Theme: {isDark ? "🌙 Dark" : "☀️ Light"}
        </div>
    )
}