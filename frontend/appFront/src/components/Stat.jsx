export default function Stat({ value, label }) {
    return (
        <div className="flex-1 flex flex-col items-center">
            <span className="text-[#f0c040] text-4xl/10 font-semibold font-serif">
                {value}
            </span>

            <p className="text-[#8799bb] text-sm/8 tracking-wider uppercase">
                {label}
            </p>
        </div>
    );
}