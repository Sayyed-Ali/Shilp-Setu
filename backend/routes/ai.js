const express = require("express")
const router = express.Router()
const { GoogleGenerativeAI } = require("@google/generative-ai")
const { protect } = require("../middleware/auth")

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

// POST /api/ai/generate-description
// protected — only logged in users (admin) can use this
router.post("/generate-description", protect, async (req, res, next) => {
    try {
        const { title, region, material, size, category, tone, imageUrl } = req.body

        if (!title || !region || !material) {
            return res.status(400).json({
                success: false,
                message: "title, region and material are required"
            })
        }

        const toneInstructions = {
            premium: "Write in a premium, luxury tone — sophisticated, aspirational, and elegant. Suitable for high-end hotel gifting and corporate buyers.",
            traditional: "Write in a warm, traditional tone — emphasising cultural heritage, artisanal skill, and the human story behind the craft.",
            export: "Write in a professional, export-ready tone — factual, precise, and focused on specifications, quality standards, and bulk ordering."
        }

        const selectedTone = toneInstructions[tone] || toneInstructions.traditional

        const prompt = `You are a professional product copywriter for Shilp Setu, a marketplace connecting rural Indian artisans with institutional buyers.

Generate a compelling product description for the following handcrafted item:

Product Name: ${title}
Region of Origin: ${region}
Material: ${material}
${size ? `Size/Dimensions: ${size}` : ""}
${category ? `Craft Category: ${category}` : ""}

Tone instruction: ${selectedTone}

Requirements:
- Write exactly 2 paragraphs
- First paragraph: describe the product, its craftsmanship, and cultural significance
- Second paragraph: explain the quality, practical applications, and why institutional buyers (hotels, gift companies, exporters) should source this
- Do not use generic filler phrases like "this beautiful product"
- Mention the region and material naturally
- Keep it between 80-120 words total

Also generate a Hindi translation of the same description (2 paragraphs, same structure).

Return ONLY a valid JSON object with exactly this structure, no markdown, no extra text:
{"english": "English description here", "hindi": "Hindi description here"}`

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
        const result = await model.generateContent(prompt)
        const responseText = result.response.text()

        // parse the JSON from Gemini's response
        let parsed
        try {
            // strip any markdown code fences if Gemini added them
            const cleaned = responseText.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim()
            parsed = JSON.parse(cleaned)
        } catch (parseError) {
            return res.status(500).json({
                success: false,
                message: "AI returned invalid format — please try again"
            })
        }

        res.status(200).json({
            success: true,
            data: {
                english: parsed.english,
                hindi: parsed.hindi,
                tone: tone || "traditional"
            }
        })
    } catch (error) {
        // handle Gemini-specific errors
        if (error.message?.includes("API_KEY")) {
            return res.status(500).json({ success: false, message: "AI service configuration error" })
        }
        if (error.message?.includes("RATE_LIMIT")) {
            return res.status(429).json({ success: false, message: "AI rate limit reached, please wait a moment" })
        }
        next(error)
    }
})

module.exports = router