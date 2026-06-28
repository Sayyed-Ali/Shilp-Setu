// in-memory store — will be replaced with MongoDB

let products = [
    {
        id: "1",
        title: "Hand-woven Woolen Shawl",
        region: "Kashmir",
        material: "Wool",
        size: "180×90 cm",
        price: 1200,
        moq: 50,
        ai: true,
        category: "Handloom",
        emoji: "🧣",
        bg: "bg-orange-100"
    },
    {
        id: "2",
        title: "Bamboo Table Runner",
        region: "Manipur",
        material: "Bamboo",
        size: "120×30 cm",
        price: 450,
        moq: 100,
        ai: true,
        category: "Eco Craft",
        emoji: "🎍",
        bg: "bg-green-100"
    },
    {
        id: "3",
        title: "Rosewood Jewellery Box",
        region: "Karnataka",
        material: "Rosewood",
        size: "20×15 cm",
        price: 2800,
        moq: 20,
        ai: false,
        category: "Woodcraft",
        emoji: "🪵",
        bg: "bg-purple-100"
    },
    {
        id: "4",
        title: "Bandhani Dupatta",
        region: "Gujarat",
        material: "Cotton Silk",
        size: "230 cm",
        price: 980,
        moq: 60,
        ai: true,
        category: "Handloom",
        emoji: "🧵",
        bg: "bg-pink-100"
    },
    {
        id: "5",
        title: "Terracotta Decorative Pot",
        region: "West Bengal",
        material: "Clay",
        size: "25 cm",
        price: 320,
        moq: 200,
        ai: false,
        category: "Pottery",
        emoji: "🏺",
        bg: "bg-blue-100"
    },
    {
        id: "6",
        title: "Pattachitra Painting",
        region: "Odisha",
        material: "Canvas",
        size: "40×30 cm",
        price: 1500,
        moq: 30,
        ai: true,
        category: "Folk Art",
        emoji: "🎨",
        bg: "bg-yellow-100"
    }
]

let inquiries = []

module.exports = { products, inquiries }