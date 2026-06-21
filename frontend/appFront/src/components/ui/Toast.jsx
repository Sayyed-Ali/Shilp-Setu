import { createContext, useContext, useState, useCallback } from "react"

const ToastContext = createContext(null)

/*
 * Gives any child component access to showToast() via useToast()
 */
export function ToastProvider({ children }) {
    const [toast, setToast] = useState(null)

    const showToast = useCallback((message, type = "success") => {
        setToast({ message, type })

        // auto-dismiss after 3 seconds
        setTimeout(() => {
            setToast(null)
        }, 3000)
    }, [])

    return (
        <ToastContext.Provider value={showToast}>
            {children}

            {/* the actual visible toast box */}
            {toast && (
                <div
                    className={`fixed bottom-6 left-1/2 -translate-x-1/2 px-5 py-3 rounded-lg text-white font-semibold shadow-lg z-50
                        ${toast.type === "success" ? "bg-[#4a6b50]" : "bg-[#c4502c]"}`}
                >
                    {toast.message}
                </div>
            )}
        </ToastContext.Provider>
    )
}
export function useToast() {
    return useContext(ToastContext)
}