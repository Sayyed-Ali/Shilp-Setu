import HeroCardStack from "./HeroCardStack"
import Stat from "./Stat"
export default function Hero() {
    return (
        <>
            <div className="bg-[#F5F1EA] dark:bg-[#0f1626] h-auto w-full m-auto pt-12 lg:pt-20 pb-12 lg:pb-16 px-3 flex flex-col lg:flex-row items-center justify-center gap-10">

                {/*left*/}
                <div className="">
                    <div className="border border-indigo-600 rounded-lg bg-[#eff0f8] dark:bg-[#1a2238] dark:text-indigo-300 inline-flex px-4">
                        ✦ AI-Powered · Zero Commission · Pan India
                    </div>

                    <div className="pt-6">
                        <div className="text-5xl lg:text-7xl leading-tight font-serif font-black dark:text-white" style={{ fontFamily: "Fraunces", fontWeight: 900, fontSize: "4rem", lineHeight: "4rem" }}>
                            Where Indian<br></br>crafts find<br></br><span className="text-[#c4502c] italic">real buyers</span>
                        </div>
                    </div>

                    <p className="max-w-2xl my-6 lg:my-8 text-base lg:text-xl leading-7 lg:leading-8 dark:text-gray-300" style={{ fontFamily: "Plus Jakarta Sans" }}>Shilp Setu connects skilled artisans across India — from Rajasthan to Nagaland — with hotels, exporters, and gift companies. Powered by Gemini AI to create listings from a single photo.</p>

                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                        <a href="" className=" inline-block w-fit rounded-lg bg-[#c4502c] px-6 text-lg py-3 text-white">Browse Catalog &rarr;</a>
                        <a href="" className="text-xl px-4 py-2 dark:text-gray-300">See how it works</a>
                    </div>
                </div>

                <div className="w-auto px-4">
                    {/* right*/}
                    <HeroCardStack />
                </div>
            </div >

            {/* stats bar*/}
            <div className="bg-[#2c3e6b] dark:bg-[#0f1626] flex flex-col md:flex-row py-10">
                <Stat value="2,400+" label="Artisan Listings" />
                <div className="hidden md:block border-r border-[#44557d]"></div>
                <Stat value="18" label="States Covered" />
                <div className="hidden md:block border-r border-[#44557d]"></div>
                <Stat value="340+" label="Institutional Buyers" />
                <div className="hidden md:block border-r border-[#44557d]"></div>
                <Stat value="0%" label="Commission" />
            </div>
        </>
    )
}