import LoginForm from "../components/LoginForm"
import Navbar from "../components/Navbar"
import LoginBanner from "../components/LoginBanner"
import Footer from "../components/Footer"

function Login() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col lg:flex-row min-h-screen">
                {/*left side - banner */}
                <div className="w-full lg:w-1/2 bg-[#2c3e6b]">
                    <LoginBanner />
                </div>

                {/*Right side - form */}
                <div className="flex flex-1 bg-[#F5F1EA] justify-center items-center">
                    <LoginForm />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Login