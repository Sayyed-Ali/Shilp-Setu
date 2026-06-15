import AIimg from '../assets/ai.png'

export default function RightCard() {
    return (
        <>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-8 py-16 lg:py-20">
                <div className="max-w-lg">
                    <h2 className="text-3xl lg:text-4xl font-extrabold font-serif">
                        How <span className="italic text-[#F0C040]">AI</span> helps
                    </h2>

                    <p className="text-[#6b5f4e] text-base lg:text-xl leading-7 lg:leading-8 pt-6">
                        Most artisan coordinators aren't trained copywriters. Shilp Setu uses Gemini Vision AI to generate professional product descriptions from a single uploaded photo — in English and Hindi — so every listing looks polished without requiring writing skills from the admin.
                    </p>
                </div>

                <div className="w-full max-w-[500px] h-[250px] lg:h-[300px] border border-[#ddd3c4] rounded-xl bg-[#efe8da] flex items-center justify-center">
                    <img
                        src={AIimg}
                        alt="Handwoven wool craft"
                        className="w-2/3 h-auto"
                    />
                </div>

            </div>
        </>
    )
}