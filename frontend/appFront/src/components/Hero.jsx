
export default function Hero() {
    return (
        <>
            <div className="bg-[#F5F1EA] h-auto px- m-auto pt-20 pb-16 flex justify-center">
                {/*left*/}
                <div className="pr-80">
                    <div className="border border-indigo-600 rounded-lg bg-[#eff0f8] inline-flex px-4">✦ AI-Powered · Zero Commission · Pan India</div>

                    <div className="pt-6">
                        <div className="text-3xl" style={{ fontFamily: "Fraunces", fontWeight: 900, fontSize: "4rem", lineHeight: "4rem" }}>
                            Where Indian<br></br>crafts find<br></br><span className="text-[#c4502c] italic">real buyers</span>
                        </div>
                    </div>

                    <p className="max-w-2xl my-8 text-xl/8" style={{ fontFamily: "Plus Jakarta Sans" }}>Shilp Setu connects skilled artisans across India — from Rajasthan to Nagaland — with hotels, exporters, and gift companies. Powered by Gemini AI to create listings from a single photo.</p>

                    <div className="flex">
                        <a href="" className="rounded-lg bg-[#c4502c] px-4 text-xl py-2 text-white">Browse Catalog &rarr;</a>
                        <a href="" className="text-xl px-4 text-xl py-2 ml-20">See how it works</a>
                    </div>
                </div>

                <div>card</div>
            </div >
        </>
    )
}