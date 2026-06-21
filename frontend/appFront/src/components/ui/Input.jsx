// Reusable Input component

export default function Input({ label, type = "text", placeholder, value, onChange, error }) {

    return (
        <div className="mb-4">
            {label && (
                <label className="block text-sm font-semibold text-[#1e1a14] dark:text-gray-200 mb-1">
                    {label}
                </label>
            )}

            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`w-full border rounded-lg px-4 py-3 leading-3 outline-none bg-white dark:bg-[#1a2238] text-[#1e1a14] dark:text-white
                    ${error ? "border-red-500" : "border-[#c7aa84] dark:border-[#2a3552] focus:border-[#2c3e6b] dark:focus:border-indigo-400"}`}
            />

            {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
        </div>
    );
}