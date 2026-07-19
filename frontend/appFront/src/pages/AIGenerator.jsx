import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Input, Button, Loader } from "../components/ui"
import { useAuth } from "../context/AuthContext"
import { useToast } from "../components/ui/Toast"

const TONES = [
    { value: "premium", label: "Premium", desc: "Luxury hotel gifting, high-end retail" },
    { value: "traditional", label: "Traditional", desc: "Heritage, cultural storytelling" },
    { value: "export", label: "Export-ready", desc: "B2B, technical specs focused" },
]

export default function AIGenerator() {
    const { token } = useAuth()
    const showToast = useToast()
    const navigate = useNavigate()

    const [form, setForm] = useState({
        title: "",
        region: "",
        material: "",
        size: "",
        category: "",
        tone: "traditional"
    })

    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(false)
    const [activeLang, setActiveLang] = useState("english")

    function handleChange(field) {
        return (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))
    }

    async function handleGenerate() {
        if (!form.title || !form.region || !form.material) {
            showToast("Please fill in title, region and material", "error")
            return
        }

        setLoading(true)
        setResult(null)

        try {
            const res = await fetch("http://localhost:5001/api/ai/generate-description", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(form)
            })

            const data = await res.json()
            if (!res.ok) throw new Error(data.message)

            setResult(data.data)
        } catch (err) {
            showToast(err.message || "Failed to generate description", "error")
        } finally {
            setLoading(false)
        }
    }

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
        showToast("Copied to clipboard!", "success")
    }

    return (
        <div className="min-h-screen flex flex-col dark:bg-[#0f1626]">
            <Navbar />

            <div className="max-w-5xl mx-auto px-6 py-12 flex-1 w-full">

                {/* header */}
                <div className="mb-8">
                    <div className="inline-flex items-center gap-2 bg-[#e8a020]/10 text-[#e8a020] text-xs font-bold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wide">
                        ✦ Gemini AI
                    </div>
                    <h1 className="text-3xl font-serif font-bold dark:text-white mb-2">
                        AI Description Generator
                    </h1>
                    <p className="text-[#6b5f4e] dark:text-gray-400">
                        Enter your product details and let Gemini write a professional listing in English and Hindi.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* LEFT — input form */}
                    <div className="bg-white dark:bg-[#1a2238] border border-[#ddd3c4] dark:border-[#2a3552] rounded-2xl p-6">
                        <h2 className="font-semibold text-base dark:text-white mb-4">Product Details</h2>

                        <Input
                            label="Product Name *"
                            placeholder="Hand-woven Pashmina Shawl"
                            value={form.title}
                            onChange={handleChange("title")}
                        />
                        <div className="grid grid-cols-2 gap-3">
                            <Input
                                label="Region *"
                                placeholder="Kashmir"
                                value={form.region}
                                onChange={handleChange("region")}
                            />
                            <Input
                                label="Material *"
                                placeholder="Wool"
                                value={form.material}
                                onChange={handleChange("material")}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <Input
                                label="Size / Dimensions"
                                placeholder="180×90 cm"
                                value={form.size}
                                onChange={handleChange("size")}
                            />
                            <Input
                                label="Category"
                                placeholder="Handloom"
                                value={form.category}
                                onChange={handleChange("category")}
                            />
                        </div>

                        {/* tone selector */}
                        <div className="mb-5">
                            <label className="block text-sm font-semibold text-[#1e1a14] dark:text-gray-200 mb-2">
                                Tone
                            </label>
                            <div className="flex flex-col gap-2">
                                {TONES.map(t => (
                                    <label
                                        key={t.value}
                                        className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors
                                            ${form.tone === t.value
                                                ? "border-[#2c3e6b] bg-[#2c3e6b]/5 dark:bg-indigo-900/20"
                                                : "border-[#ddd3c4] dark:border-[#2a3552] hover:border-[#2c3e6b]"}`}
                                    >
                                        <input
                                            type="radio"
                                            name="tone"
                                            value={t.value}
                                            checked={form.tone === t.value}
                                            onChange={handleChange("tone")}
                                            className="accent-[#2c3e6b]"
                                        />
                                        <div>
                                            <p className="text-sm font-semibold dark:text-white">{t.label}</p>
                                            <p className="text-xs text-[#6b5f4e] dark:text-gray-400">{t.desc}</p>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <Button
                            variant="primary"
                            size="lg"
                            className="w-full"
                            onClick={handleGenerate}
                            disabled={loading}
                        >
                            {loading ? "Generating..." : "✦ Generate Description"}
                        </Button>
                    </div>

                    {/* RIGHT — output */}
                    <div className="bg-white dark:bg-[#1a2238] border border-[#ddd3c4] dark:border-[#2a3552] rounded-2xl p-6 flex flex-col">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="font-semibold text-base dark:text-white">Generated Output</h2>
                            {result && (
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setActiveLang("english")}
                                        className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors
                                            ${activeLang === "english"
                                                ? "bg-[#2c3e6b] text-white"
                                                : "bg-[#efe8da] dark:bg-[#2a3552] text-[#6b5f4e] dark:text-gray-300"}`}
                                    >
                                        English
                                    </button>
                                    <button
                                        onClick={() => setActiveLang("hindi")}
                                        className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors
                                            ${activeLang === "hindi"
                                                ? "bg-[#2c3e6b] text-white"
                                                : "bg-[#efe8da] dark:bg-[#2a3552] text-[#6b5f4e] dark:text-gray-300"}`}
                                    >
                                        हिंदी
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="flex-1 min-h-[300px] flex flex-col">
                            {loading ? (
                                <div className="flex-1 flex items-center justify-center">
                                    <div className="text-center">
                                        <Loader size="md" />
                                        <p className="text-sm text-[#6b5f4e] dark:text-gray-400 mt-4">
                                            Gemini is writing your description...
                                        </p>
                                    </div>
                                </div>
                            ) : result ? (
                                <div className="flex-1 flex flex-col">
                                    <div className="flex-1 bg-[#faf7f2] dark:bg-[#0f1626] rounded-xl p-4 text-sm text-[#1e1a14] dark:text-gray-200 leading-7 border border-[#e5ddd0] dark:border-[#2a3552]">
                                        {result[activeLang]}
                                    </div>
                                    <div className="flex gap-2 mt-4">
                                        <Button
                                            variant="outline"
                                            className="flex-1 text-sm"
                                            onClick={() => copyToClipboard(result[activeLang])}
                                        >
                                            Copy {activeLang === "english" ? "English" : "Hindi"}
                                        </Button>
                                        <Button
                                            variant="primary"
                                            className="flex-1 text-sm"
                                            onClick={handleGenerate}
                                        >
                                            Regenerate
                                        </Button>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex-1 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-4xl mb-3">✦</div>
                                        <p className="text-sm text-[#6b5f4e] dark:text-gray-400">
                                            Fill in the product details and click Generate
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}