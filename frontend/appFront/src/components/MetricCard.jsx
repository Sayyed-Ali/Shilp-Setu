export default function MetricCard({ label, value, icon }) {
    return (
        <div className="bg-white border border-[#ddd3c4] rounded-2xl p-5">
            <div className="flex justify-between items-start">
                <p className="text-xs font-semibold text-[#6b5f4e] uppercase tracking-wide">{label}</p>
                <span className="text-xl">{icon}</span>
            </div>
            <p className="font-serif font-bold text-3xl text-[#1e1a14] mt-2">{value}</p>
        </div>
    );
}