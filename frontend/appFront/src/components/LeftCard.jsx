import WoolImg from '../assets/wool.png'
export default function LeftCard() {
    return (
        <>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-8 py-16 lg:py-16">

                <div className="w-full max-w-[500px] h-[250px] lg:h-[300px] border border-[#ddd3c4] rounded-xl bg-[#efe8da] flex items-center justify-center">
                    <img
                        src={WoolImg}
                        alt="Handwoven wool craft"
                        className="w-2/3 h-auto"
                    />
                </div>

                <div className="max-w-lg">
                    <h2 className="text-3xl lg:text-4xl font-extrabold font-serif">
                        The <span className="italic text-[#F0C040]">problem</span> we're solving
                    </h2>

                    <p className="text-[#6b5f4e] text-base lg:text-xl leading-7 lg:leading-8 pt-6">
                        Millions of skilled artisans across rural India depend on seasonal exhibitions, local fairs, and exploitative middlemen to sell their work. Buyers — hotels, gift companies, exporters — have no reliable way to discover or source authentic handcrafted products at scale. The gap between maker and market is massive.
                    </p>
                </div>

            </div>
        </>
    )
}