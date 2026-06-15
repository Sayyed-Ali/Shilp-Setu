import HeroCardStack from "./HeroCardStack"
import Stat from "./Stat"
export default function Hero() {
    return (
        <>
            <div className="bg-[#F5F1EA] h-auto px- m-auto pt-20 pb-16 flex justify-center">
                {/*left*/}
                <div className="">
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

                <div className="pl-20">
                    {/* right*/}
                    <HeroCardStack />
                </div>
            </div >

            {/* stats bar*/}
            <div className="bg-[#2c3e6b] flex py-10">
                <Stat value="2,400+" label="Artisan Listings" />
                <div className="border-r border-[#44557d]"></div>
                <Stat value="18" label="States Covered" />
                <div className="border-r border-[#44557d]"></div>
                <Stat value="340+" label="Institutional Buyers" />
                <div className="border-r border-[#44557d]"></div>
                <Stat value="0%" label="Commission" />
            </div>
        </>
    )
}