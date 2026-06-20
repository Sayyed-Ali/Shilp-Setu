import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Card from '../components/Card'

const products = [
    { emoji: "🧣", bg: "bg-orange-100", region: "Kashmir", title: "Hand-woven Woolen Shawl", material: "Wool", size: "180×90 cm", price: "₹1,200", moq: 50, ai: true },
    { emoji: "🎍", bg: "bg-green-100", region: "Manipur", title: "Bamboo Table Runner", material: "Bamboo", size: "120×30 cm", price: "₹450", moq: 100, ai: true },
    { emoji: "🪵", bg: "bg-purple-100", region: "Karnataka", title: "Rosewood Jewellery Box", material: "Rosewood", size: "20×15 cm", price: "₹2,800", moq: 20, ai: false },
    { emoji: "🧵", bg: "bg-pink-100", region: "Gujarat", title: "Bandhani Dupatta", material: "Cotton Silk", size: "230 cm", price: "₹980", moq: 60, ai: true },
    { emoji: "🏺", bg: "bg-blue-100", region: "West Bengal", title: "Terracotta Decorative Pot", material: "Clay", size: "25 cm", price: "₹320", moq: 200, ai: false },
    { emoji: "🎨", bg: "bg-yellow-100", region: "Odisha", title: "Pattachitra Painting", material: "Canvas", size: "40×30 cm", price: "₹1,500", moq: 30, ai: true },
]

function Home() {
    return (
        <>
            <Navbar />
            <Hero />

            {/* catalog section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-serif font-extrabold mb-8">
                    Browse the <span className="italic text-[#e8a020]">collection</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((p, i) => (
                        <Card key={i} {...p} />
                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Home