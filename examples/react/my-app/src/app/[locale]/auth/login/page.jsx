import StoreProvider from "@/store/StoreProvider";
import AuthGate from "@/components/auth/AuthGate";

export default function AuthPage() {
    return (
        <StoreProvider>
            <AuthGate/>
        </StoreProvider>
    )
}