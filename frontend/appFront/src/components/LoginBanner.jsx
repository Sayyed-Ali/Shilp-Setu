import BannerImg from "../assets/village.jpg"

export default function LoginBanner() {
    return (
        <div className="relative h-full min-h-[500px] overflow-hidden">

            {/* Background Image */}
            <img
                src={BannerImg}
                alt="Rural India"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-[#2c3e6b]/75"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center pt-12">
                <div className="max-full p-12 lg:p-16">
                    <h2 className="font-serif text-5xl lg:text-6xl font-black text-white leading-tight">
                        Shilp Setu
                    </h2>

                    <p className="mt-6 text-lg lg:text-xl text-slate-200">
                        Reach buyers across India with AI-powered listings.
                    </p>
                </div>
            </div>
        </div>
    );
}