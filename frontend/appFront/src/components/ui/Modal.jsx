import { useEffect, useRef } from "react"

/**
 * Reusable Modal component
 * isOpen - controls whether modal is visible
 * onClose - called when modal should close
 * title - modal heading
 * children - modal body content
 */

export default function Modal({ isOpen, onClose, title, children }) {
    const modalRef = useRef(null)

    // close on Escape key
    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === "Escape") {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown)
        }

        // cleanup — remove listener when modal closes or component unmounts
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [isOpen, onClose])

    // focus the modal when it opens
    useEffect(() => {
        if (isOpen && modalRef.current) {
            modalRef.current.focus()
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        // backdrop — clicking outside the box closes the modal
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
            onClick={onClose}
        >
            <div
                ref={modalRef}
                tabIndex={-1}
                onClick={(e) => e.stopPropagation()} // stop clicks inside from closing it
                className="bg-white rounded-2xl p-6 w-full max-w-md outline-none"
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-serif font-bold text-xl">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-[#6b5f4e] hover:text-[#1e1a14] text-2xl leading-none"
                    >
                        &times;
                    </button>
                </div>

                <div>{children}</div>
            </div>
        </div>
    )
}