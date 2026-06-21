// text - optional text to show below spinner
export default function Loader({ size = "md", text }) {

    const sizes = {
        sm: "w-5 h-5 border-2",
        md: "w-9 h-9 border-4",
        lg: "w-14 h-14 border-4",
    };

    return (
        <div className="flex flex-col items-center justify-center gap-3">
            <div
                className={`${sizes[size]} border-[#ddd3c4] border-t-[#2c3e6b] rounded-full animate-spin`}
            ></div>

            {text && (
                <p className="text-sm text-[#6b5f4e] font-medium">{text}</p>
            )}
        </div>
    );
}