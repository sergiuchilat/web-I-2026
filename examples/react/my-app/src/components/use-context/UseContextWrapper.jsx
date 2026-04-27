'use client'
import { useState, createContext } from "react";
import A from "@/components/use-context/A";
import B from "@/components/use-context/B";
import C from "@/components/use-context/C";

export const ThemeContext = createContext(null)

export default function UseContextWrapper() {
    const [isDark, setIsDark] = useState(false);

    function toggleTheme() {
        setIsDark(prev => !prev);
    }

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            <div style={{
                background: isDark ? "#1a1a1a" : "#ffffff",
                minHeight: "100vh",
                padding: "20px",
                transition: "background 0.3s"
            }}>
                <button onClick={toggleTheme} style={{
                    marginBottom: "20px",
                    padding: "8px 20px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    background: isDark ? "#ffffff" : "#1a1a1a",
                    color: isDark ? "#1a1a1a" : "#ffffff",
                }}>
                    {isDark ? "☀️ Light mode" : "🌙 Dark mode"}
                </button>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <A/>
                    <B/>
                    <C/>
                
                </div>
            </div>
        </ThemeContext.Provider>
    )
}