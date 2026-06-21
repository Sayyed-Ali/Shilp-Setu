import Navbar from "../components/Navbar"
import LeftCard from "../components/LeftCard"
import RightCard from "../components/RightCard"
import QualityCard from "../components/QualityCard"
import { FaHandshake } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { GiQuickSlash } from "react-icons/gi";
import Footer from '../components/Footer'

function About() {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                {/*top hero section*/}
                <div className="h-auto bg-[#2c3e6b] flex flex-col items-center flex-1">
                    <span className="font-serif text-6xl font-bold text-white px-4 pt-14 pb-6">
                        Built to&nbsp;
                        <span className="italic text-[#F0C040]">bridge</span>
                        &nbsp;the gap
                    </span>
                    <p className="text-[#8799bb] text-xl/8 max-w-2xl text-center pb-20">India's artisans create some of the finest handcrafted products in the world — but most of them never find the buyers they deserve. Shilp Setu exists to change that.</p>
                </div>

                {/*middle card section*/}
                <div className="bg-[#f4f0eb] dark:bg-[#0f1626] flex-1">
                    <LeftCard />
                    <RightCard />
                </div>

                {/*bottom quality cards section*/}
                <div className="bg-[#efe8da] dark:bg-[#0a0f1f] flex flex-col justify-around items-center p-10 pb-5 flex-1">
                    <span className="text-3xl lg:text-4xl font-extrabold font-serif pb-10 dark:text-white">What we stand for</span>

                    <div className="cards flex flex-col lg:flex-row gap-10">
                        <QualityCard icon={<FaHandshake />} title="Zero Commission" text="We never take a cut from artisan earnings. Every rupee a buyer pays goes directly to the craft collective." />
                        <QualityCard icon={<TbWorld />} title="Pan-India Reach" text="From Rajasthan's block printers to Nagaland's weavers — every state, every tradition, one platform." />
                        <QualityCard icon={<GiQuickSlash />} title="AI-Powered Speed" text="Upload a photo, get a full listing in seconds. No writing, no delay, no middlemen in the digital process." />
                    </div>
                </div >
                <Footer />
            </div>
        </>
    )
}

export default About