# PROMPTS.md — AI Prompt Engineering Log

## Feature: AI Product Description Generator
**API:** Google Gemini 1.5 Flash  
**Endpoint:** POST /api/ai/generate-description  
**Purpose:** Generate professional product descriptions in English and Hindi for handcraft listings

---

## Prompt Variation 1 — Simple instruction

**Prompt:** Write a product description for a ${material} product from ${region} called ${title}. Make it suitable for buyers.
**Example Input:** Pashmina Shawl, Kashmir, Wool

**Example Output:**
> A Kashmiri Pashmina Shawl made from fine wool. Suitable for buyers interested in traditional Indian crafts.

**Assessment:** Too short. Generic and uninformative. No cultural context. Not useful for institutional buyers.

---

## Prompt Variation 2 — Structured with role and format

**Prompt:** You are a product copywriter. Write 2 paragraphs about this handcrafted item:
Name: ${title}, Region: ${region}, Material: ${material}
First paragraph: craftsmanship and cultural significance
Second paragraph: why buyers should source this

**Example Input:** Bandhani Dupatta, Gujarat, Cotton Silk

**Example Output:**
> The Bandhani Dupatta from Gujarat is a hand-tied textile created using an ancient resist-dyeing technique practiced for centuries. Each piece requires skilled artisans to tie thousands of tiny knots by hand before dyeing, creating the distinctive dotted pattern that defines this craft.
>
> For institutional buyers, the Bandhani Dupatta represents an authentic, high-margin product with strong gifting appeal. Hotels, airlines, and export houses sourcing from Gujarat artisan collectives can expect MOQ-friendly pricing with consistent quality standards.

**Assessment:** Much better structure. Cultural context present. Still lacking tone variation and Hindi output.

---

## Prompt Variation 3 — Full production prompt with tone, JSON output, Hindi (CHOSEN)

**Prompt:** You are a professional product copywriter for Shilp Setu, a marketplace connecting rural Indian artisans with institutional buyers.
Generate a compelling product description for:
Product Name: ${title}
Region: ${region}
Material: ${material}
Size: ${size}
Category: ${category}
Tone: ${toneInstructions[tone]}
Requirements:

Exactly 2 paragraphs
First: craftsmanship and cultural significance
Second: quality, practical applications, why institutional buyers should source this
No generic filler phrases
80-120 words total

Also generate a Hindi translation.
Return ONLY valid JSON: {"english": "...", "hindi": "..."}

**Example Input:** Rosewood Jewellery Box, Karnataka, Rosewood, 20×15 cm, Woodcraft, premium tone

**Example Output:**
```json
{
  "english": "Crafted by master woodworkers in Karnataka's artisan clusters, this Rosewood Jewellery Box embodies centuries of South Indian woodcraft tradition. Each piece is carved entirely by hand from sustainably sourced rosewood, with intricate detailing that requires up to three days of skilled labor per unit.\n\nFor premium hotel chains, luxury gifting companies, and high-end exporters, this box represents an authentic, high-perceived-value product. The natural rosewood grain ensures no two pieces are identical, making each box a genuinely unique corporate gift or retail offering.",
  "hindi": "कर्नाटक के कारीगर समूहों में कुशल लकड़ी के कारीगरों द्वारा निर्मित, यह रोज़वुड ज्वेलरी बॉक्स दक्षिण भारतीय लकड़ी शिल्प की सदियों पुरानी परंपरा को दर्शाता है। प्रत्येक टुकड़े को टिकाऊ रोज़वुड से हाथ से तराशा जाता है।\n\nप्रीमियम होटल श्रृंखलाओं और उपहार कंपनियों के लिए, यह बॉक्स एक प्रामाणिक उत्पाद है जो उच्च कॉर्पोरेट उपहार के रूप में उपयुक्त है।"
}
```

**Assessment:** Best results. Tone variation works correctly. JSON format reliable. Hindi output grammatically correct. English output meets 80-120 word requirement consistently.

---

## Why Variation 3 Works Best

Variation 3 performs best because of three specific improvements: (1) the role assignment ("You are a professional product copywriter for Shilp Setu") anchors the model's voice and prevents generic outputs; (2) explicit structural constraints (exactly 2 paragraphs, 80-120 words) prevent both padding and truncation; and (3) asking for JSON output directly — rather than asking for text and parsing it later — eliminates the need for complex regex parsing and makes the Hindi/English split reliable. The tone instruction block also proved critical: without it, the model defaulted to a neutral tone that was inappropriate for both premium gifting and export contexts.