export default function QualityCard({ icon, title, text }) {
    return (
        <div className=" bg-[#f7f4ef] rounded-3xl border border-[#ddd3c4] p-8 w-full max-w-[400px] h-[280px] flex flex-col items-center text-center mb-5">
            <div className="text-4xl mb-6">{icon}</div>
            <h3 className="font-semibold text-[#2c3e6b] text-xl mb-4">{title}</h3>
            <p className="text-[#6b5f4e] leading-8">{text}</p>
        </div >
    );
}