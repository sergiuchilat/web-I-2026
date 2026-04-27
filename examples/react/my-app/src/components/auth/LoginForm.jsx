'use client'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "@/store/authThunks";

export default function LoginForm() {
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector((state) => state.auth);

    const [email,    setEmail]    = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(loginThunk(email, password));
    }

    return (
        <div style={{
            maxWidth: "400px",
            margin: "80px auto",
            padding: "32px",
            borderRadius: "12px",
            border: "1px solid #e0e0e0",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)"
        }}>
            <h2 style={{ marginBottom: "8px" }}>Welcome back 👋</h2>
            <p style={{ color: "#888", marginBottom: "24px", fontSize: "14px" }}>
                Try: admin@test.com / 123
            </p>

            {error && (
                <div style={{
                    background: "#fff0f0",
                    color: "#cc0000",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    marginBottom: "16px",
                    fontSize: "14px"
                }}>
                    ❌ {error}
                </div>
            )}

            <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", marginBottom: "6px", fontSize: "14px", fontWeight: "500" }}>
                    Email
                </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: "8px",
                        border: "1px solid #ddd",
                        fontSize: "14px",
                    }}
                />
            </div>

            <div style={{ marginBottom: "24px" }}>
                <label style={{ display: "block", marginBottom: "6px", fontSize: "14px", fontWeight: "500" }}>
                    Password
                </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: "8px",
                        border: "1px solid #ddd",
                        fontSize: "14px",
                    }}
                />
            </div>

            <button
                onClick={handleSubmit}
                disabled={isLoading}
                style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "8px",
                    border: "none",
                    background: isLoading ? "#aaa" : "#1a1a1a",
                    color: "#fff",
                    fontSize: "15px",
                    fontWeight: "500",
                    cursor: isLoading ? "not-allowed" : "pointer",
                }}
            >
                {isLoading ? "Logging in..." : "Login"}
            </button>
        </div>
    )
}