// Reusable Button component

export default function Button({ variant = "primary", size = "md", disabled = false, onClick, className = "", type = "button", children }) {

    const baseStyles = "font-semibold rounded-lg transition-colors";

    const variants = {
        primary: "bg-[#2c3e6b] text-white hover:bg-[#1a2645]",
        secondary: "bg-[#c4502c] text-white hover:bg-[#a83c20]",
        outline: "border-2 border-[#ddd3c4] text-[#1e1a14] hover:border-[#2c3e6b]",
        ghost: "bg-transparent text-[#1e1a14] hover:bg-[#efe8da]",
    };

    const sizes = {
        sm: "text-sm px-3 py-1.5",
        md: "text-base px-5 py-2.5",
        lg: "text-lg px-7 py-3.5",
    };

    const disabledStyles = "opacity-50 cursor-not-allowed";

    return (
        <button
            type={type}
            onClick={disabled ? undefined : onClick}
            disabled={disabled}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? disabledStyles : ""} ${className}`}
        >
            {children}
        </button>
    );
}