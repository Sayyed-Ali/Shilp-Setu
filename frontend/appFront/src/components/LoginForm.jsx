import { useState } from "react"
import Button from "./ui/Button"
import Input from "./ui/Input"

export default function LoginForm({ role, setRole }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <div className="w-full max-w-md font-serif flex flex-col justify-center items-center m-auto px-4 py-8">
                <div className="">
                    <h2 className="text-5xl font-black pb-4">Welcome back</h2>
                    <p className="text-lg pb-4 font-sans font-thin">Sign in to continue your artisan journey</p>
                </div>

                <div className="tab-row flex flex-row border border-[#c7aa84] rounded-lg w-full items-center font-sans mb-4 overflow-hidden">
                    <Button
                        variant={role === "artisan" ? "primary" : "ghost"}
                        className="w-1/2 rounded-none"
                        onClick={() => setRole("artisan")}
                    >
                        Artisan Login
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
                    <Input
                        label="Email address"
                        type="email"
                        placeholder="you@example.com"
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

                    <Button type="button" variant="primary" size="lg" className="w-full mt-2">
                        Sign-in
                    </Button>
                </div>

                <div className="w-full text-[#c7aa84] font-sans flex flex-col justify-center items-center pt-8">
                    <span>or</span>
                    <span>Don't have an account?&nbsp;<a href="" className="text-[#2c3e6b]">Request access</a></span>
                </div>
            </div>
        </>
    )
}