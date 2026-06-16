export default function LoginForm() {
    return (
        <>
            <div className="w-full max-w-md font-serif  flex flex-col justify-center items-center m-auto px-4 py-8">
                <div className="">
                    <h2 className="text-5xl font-black pb-4">Welcome back</h2>
                    <p className="text-lg pb-4 font-sans font-thin">Sign in to continue your artisan journey</p>
                </div>

                <div className="tab-row flex flex-row border border-[#c7aa84] rounded-lg w-full items-center font-sans mb-4 overflow-hidden">
                    <button className=" w-1/2 bg-[#2c3e6b] text-white py-2 ">Artisan Login</button>
                    <button className=" w-1/2 py-2 ">Buyer Login</button>
                </div>
                <div className="form font-sans w-full">
                    <form action="">
                        <label htmlFor="email">Email address</label><br />
                        <input type="email" id="email" className="border border-[#c7aa84] rounded-lg leading-3 w-full my-2 px-4 py-3" />
                        <br />
                        <label htmlFor="pswd">Password</label><br />
                        <input type="password" id="pswd" className="border border-[#c7aa84] rounded-lg leading-3 w-full my-2 px-4 py-3" />

                        <button className="w-full bg-[#2c3e6b] rounded-lg mt-2 text-white px-4 py-3">Sign-in</button>
                    </form>
                </div>

                <div className="w-full text-[#c7aa84] font-sans flex flex-col justify-center items-center pt-8">
                    <span>or</span>
                    <span>Don't have an account?&nbsp;<a href="" className="text-[#2c3e6b]">Request access</a></span>
                </div>
            </div >
        </>
    )
}