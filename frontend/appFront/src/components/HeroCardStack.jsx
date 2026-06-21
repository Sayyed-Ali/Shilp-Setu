export default function HeroCardStack() {
    return (
        <div className="relative w-[320px] h-[320px] lg:w-[450px] lg:h-[400px]">
            {/* Back Card */}
            <div className=" absolute right-0 top-0 w-48 lg:w-64 bg-white dark:bg-[#1a2238] rounded-3xl p-4 shadow-md rotate-6 z-10">
                <div className="h-32 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center text-5xl">🏺</div>
                <h3 className="mt-4 font-bold text-lg dark:text-white">Pottery Vase</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Rajasthan · Ceramic</p>
                <span className="inline-block mt-3 bg-yellow-200 px-2 py-1 rounded-full text-xs">AI LISTED</span>
            </div>

            {/* Front Card */}
            <div className=" absolute left-0 top-10 w-60 lg:w-72 bg-white dark:bg-[#1a2238] rounded-3xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.08)] z-20 ">
                <div className="h-28 lg:h-40 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center text-5xl">🧣</div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Kashmir · Wool · 180×90 cm</p>
                <div className="flex justify-between items-center mt-4">
                    <span className="bg-yellow-200 px-2 py-1 rounded-full text-xs">AI LISTED</span>
                    <span className="text-xs text-gray-500">MOQ: 50</span>
                </div>
                <div className="border-t dark:border-[#2a3552] mt-4 pt-3">
                    <p className="font-bold text-2xl dark:text-white">
                        ₹1,200/pc
                    </p>
                </div>
            </div>

            {/* Decorative Card */}
            <div className="absolute left-16 top-24 w-48 h-56 lg:w-64 lg:h-72 bg-slate-100 dark:bg-[#141b30] rounded-3xl shadow-md -rotate-3 z-0"></div>
        </div>
    );
}