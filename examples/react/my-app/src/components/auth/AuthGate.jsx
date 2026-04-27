'use client'
import { useSelector } from "react-redux";
import LoginForm from "@/components/auth/LoginForm";

export default function AuthGate({page: Page}) {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return isAuthenticated ? <Page/> : <LoginForm />;
}