import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LoginBanner from "../components/LoginBanner"
import LoginForm from "../components/LoginForm"
import { useAuth } from "../context/AuthContext"
import { useToast } from "../components/ui/Toast"

export default function Login() {
    const [role, setRole] = useState("artisan")
    const { login } = useAuth()
    const { showToast } = useToast() || {}
    const navigate = useNavigate()

    async function handleLogin(email, password) {
        try {
            const res = await fetch("http://localhost:5001/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            })
            const data = await res.json()

            if (!res.ok) throw new Error(data.message)

            login(data.user, data.token)

            if (data.user.role === "admin") {
                navigate("/dashboard")
            } else {
                navigate("/")
            }
        } catch (err) {
            throw err // LoginForm catches and shows error
        }
    }

    return (
        <div className="flex h-screen">
            <div className="hidden lg:block w-1/2">
                <LoginBanner role={role} />
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#F5F1EA] dark:bg-[#0f1626]">
                <LoginForm role={role} setRole={setRole} onLogin={handleLogin} />
            </div>
        </div>
    )
}