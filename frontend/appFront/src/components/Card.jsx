export default function Card({ emoji, bg, region, title, material, size, price, moq, ai }) {
    return (
        <div className="bg-white dark:bg-[#1a2238] border border-[#ddd3c4] dark:border-[#2a3552] rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer">

            {/* image area */}
            <div className={`h-44 ${bg} flex items-center justify-center text-5xl relative`}>
                <span className="absolute top-2 left-2 bg-[#2c3e6b] text-[#f0c040] text-xs font-bold px-2 py-1 rounded">
                    {region}
                </span>
                {ai && (
                    <span className="absolute top-2 right-2 bg-[#e8a020] text-[#1e1a14] text-xs font-bold px-2 py-1 rounded">
                        AI
                    </span>
                )}
                {emoji}
            </div>

            {/* body */}
            <div className="p-4">
                <h3 className="font-semibold text-base mb-2 dark:text-white">{title}</h3>

                <div className="flex gap-2 flex-wrap mb-3">
                    <span className="bg-[#efe8da] dark:bg-[#2a3552] text-[#6b5f4e] dark:text-gray-300 text-xs font-semibold px-2 py-1 rounded">{material}</span>
                    <span className="bg-[#efe8da] dark:bg-[#2a3552] text-[#6b5f4e] dark:text-gray-300 text-xs font-semibold px-2 py-1 rounded">{size}</span>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-[#ddd3c4] dark:border-[#2a3552]">
                    <div>
                        <p className="font-serif font-bold text-lg text-[#2c3e6b] dark:text-indigo-300">{price}</p>
                        <p className="text-xs text-[#b5a898] dark:text-gray-500">per pc · MOQ {moq}</p>
                    </div>
                    <button className="bg-[#1e1a14] hover:bg-[#c4502c] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
                        Inquire
                    </button>
                </div>
            </div>
        </div>
    );
}