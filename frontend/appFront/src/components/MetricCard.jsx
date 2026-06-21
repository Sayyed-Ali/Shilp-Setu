export default function MetricCard({ label, value, icon }) {
    return (
        <div className="bg-white dark:bg-[#1a2238] border border-[#ddd3c4] dark:border-[#2a3552] rounded-2xl p-5">
            <div className="flex justify-between items-start">
                <p className="text-xs font-semibold text-[#6b5f4e] dark:text-gray-400 uppercase tracking-wide">{label}</p>
                <span className="text-xl">{icon}</span>
            </div>
            <p className="font-serif font-bold text-3xl text-[#1e1a14] dark:text-white mt-2">{value}</p>
        </div>
    );
}