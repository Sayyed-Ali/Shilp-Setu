import LoginForm from "../components/LoginForm"
import Navbar from "../components/Navbar"
import LoginBanner from "../components/LoginBanner"
import Footer from "../components/Footer"
import { useState } from "react"

function Login() {
    const [role, setRole] = useState("default");

    return (
        <>
            <Navbar />
            <div className="flex flex-col lg:flex-row min-h-[calc(100vh-72px)]">
                {/*left side - banner */}
                <div className="w-full lg:w-1/2">
                    <LoginBanner role={role} />
                </div>

                {/*Right side - form */}
                <div className="flex flex-1 bg-[#F5F1EA] dark:bg-[#0f1626] justify-center items-center">
                    <LoginForm role={role} setRole={setRole} />
                </div>
            </div>
        </>
    )
}

export default Login