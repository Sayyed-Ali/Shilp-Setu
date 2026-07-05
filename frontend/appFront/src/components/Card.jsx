/**
 * Reusable product Card component
 * @param {string} image - product image URL
 * @param {string} region - region where product is made
 * @param {string} title - product name
 * @param {string} material - material used
 * @param {string} size - product dimensions
 * @param {string} price - price per piece
 * @param {number} moq - minimum order quantity
 * @param {boolean} ai - whether description was AI generated
 */
export default function Card({ image, region, title, material, size, price, moq, ai }) {
    return (
        <div className="bg-white dark:bg-[#1a2238] border border-[#ddd3c4] dark:border-[#2a3552] rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer">

            {/* image area */}
            <div className="h-44 relative overflow-hidden bg-[#f5f0e8] dark:bg-[#0f1626]">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    // fallback if no image yet
                    <div className="w-full h-full flex items-center justify-center text-[#b5a898] text-sm">
                        No image
                    </div>
                )}
                <span className="absolute top-2 left-2 bg-[#2c3e6b] text-[#f0c040] text-xs font-bold px-2 py-1 rounded">
                    {region}
                </span>
                {ai && (
                    <span className="absolute top-2 right-2 bg-[#e8a020] text-[#1e1a14] text-xs font-bold px-2 py-1 rounded">
                        AI
                    </span>
                )}
            </div>

            {/* body */}
            <div className="p-4">
                <h3 className="font-semibold text-base mb-2 dark:text-white">{title}</h3>

                <div className="flex gap-2 flex-wrap mb-3">
                    <span className="bg-[#efe8da] dark:bg-[#2a3552] text-[#6b5f4e] dark:text-gray-300 text-xs font-semibold px-2 py-1 rounded">{material}</span>
                    {size && <span className="bg-[#efe8da] dark:bg-[#2a3552] text-[#6b5f4e] dark:text-gray-300 text-xs font-semibold px-2 py-1 rounded">{size}</span>}
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-[#ddd3c4] dark:border-[#2a3552]">
                    <div>
                        <p className="font-serif font-bold text-lg text-[#2c3e6b] dark:text-indigo-300">₹{price}</p>
                        <p className="text-xs text-[#b5a898] dark:text-gray-500">per pc · MOQ {moq}</p>
                    </div>
                    <button className="bg-[#1e1a14] dark:bg-[#2c3e6b] hover:bg-[#c4502c] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
                        Inquire
                    </button>
                </div>
            </div>
        </div>
    )
}