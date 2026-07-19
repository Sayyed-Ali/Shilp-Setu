import { useState } from "react"
import { Button, Input, Loader } from "./ui"

export default function LoginForm({ role, setRole, onLogin }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    async function handleSignIn() {
        setError("")
        setLoading(true)
        try {
            await onLogin(email, password)
        } catch (err) {
            setError(err.message || "Login failed")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="w-full max-w-md font-serif flex flex-col justify-center items-center m-auto px-4 py-8">
            <div>
                <h2 className="text-5xl font-black pb-4 dark:text-white">Welcome back</h2>
                <p className="text-lg pb-4 font-sans font-thin dark:text-gray-400">Sign in to continue your artisan journey</p>
            </div>

            <div className="tab-row flex flex-row border border-[#c7aa84] dark:border-[#2a3552] rounded-lg w-full items-center font-sans mb-4 overflow-hidden">
                <Button
                    variant={role === "artisan" ? "primary" : "ghost"}
                    className="w-1/2 rounded-none"
                    onClick={() => setRole("artisan")}
                >
                    Admin Login
                </Button>
                <Button
                    variant={role === "buyer" ? "primary" : "ghost"}
                    className="w-1/2 rounded-none"
                    onClick={() => setRole("buyer")}
                >
                    Buyer Login
                </Button>
            </div>

            <div className="form font-sans w-full">
                {error && (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm px-4 py-3 rounded-lg mb-4">
                        {error}
                    </div>
                )}

                <Input
                    label="Email address"
                    type="email"
                    placeholder="admin@shilpsetu.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    label="Password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {loading ? (
                    <div className="py-3 flex justify-center">
                        <Loader size="sm" />
                    </div>
                ) : (
                    <Button type="button" variant="primary" size="lg" className="w-full mt-2" onClick={handleSignIn}>
                        Sign in
                    </Button>
                )}
            </div>

            <div className="w-full text-[#c7aa84] dark:text-gray-500 font-sans flex flex-col justify-center items-center pt-8">
                <span>or</span>
                <div className="w-full mt-2">
                    <a
                        href="http://localhost:5001/api/auth/google"
                        className="w-full flex items-center justify-center gap-3 border-2 border-[#ddd3c4] dark:border-[#2a3552] rounded-lg px-5 py-3 font-semibold text-sm hover:border-[#2c3e6b] dark:hover:border-indigo-400 transition-colors dark:text-white"
                    >
                        <svg width="18" height="18" viewBox="0 0 48 48">
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                        </svg>
                        Continue with Google
                    </a>
                </div>
                <span>Don't have an account?&nbsp;<a href="#" className="text-[#2c3e6b] dark:text-indigo-400">Request access</a></span>

            </div>
        </div>
    )
}