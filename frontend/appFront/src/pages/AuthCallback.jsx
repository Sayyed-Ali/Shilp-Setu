import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import Loader from "../components/ui/Loader"

export default function AuthCallback() {
    const navigate = useNavigate()
    const { login } = useAuth()

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const token = params.get("token")
        const userStr = params.get("user")

        if (token && userStr) {
            try {
                const user = JSON.parse(decodeURIComponent(userStr))
                login(user, token)
                navigate(user.role === "admin" ? "/dashboard" : "/")
            } catch (err) {
                navigate("/login?error=invalid_callback")
            }
        } else {
            navigate("/login?error=oauth_failed")
        }
    }, [])

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F5F1EA] dark:bg-[#0f1626]">
            <div className="text-center">
                <Loader size="lg" text="Signing you in..." />
            </div>
        </div>
    )
}