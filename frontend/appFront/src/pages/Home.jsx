import { useState } from "react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Card from '../components/Card'
import Modal from '../components/ui/Modal'

const products = [
    { emoji: "🧣", bg: "bg-orange-100", region: "Kashmir", title: "Hand-woven Woolen Shawl", material: "Wool", size: "180×90 cm", price: "₹1,200", moq: 50, ai: true },
    { emoji: "🎍", bg: "bg-green-100", region: "Manipur", title: "Bamboo Table Runner", material: "Bamboo", size: "120×30 cm", price: "₹450", moq: 100, ai: true },
    { emoji: "🪵", bg: "bg-purple-100", region: "Karnataka", title: "Rosewood Jewellery Box", material: "Rosewood", size: "20×15 cm", price: "₹2,800", moq: 20, ai: false },
    { emoji: "🧵", bg: "bg-pink-100", region: "Gujarat", title: "Bandhani Dupatta", material: "Cotton Silk", size: "230 cm", price: "₹980", moq: 60, ai: true },
    { emoji: "🏺", bg: "bg-blue-100", region: "West Bengal", title: "Terracotta Decorative Pot", material: "Clay", size: "25 cm", price: "₹320", moq: 200, ai: false },
    { emoji: "🎨", bg: "bg-yellow-100", region: "Odisha", title: "Pattachitra Painting", material: "Canvas", size: "40×30 cm", price: "₹1,500", moq: 30, ai: true },
]

function Home() {
    const [selectedProduct, setSelectedProduct] = useState(null)

    return (
        <>
            <Navbar />
            <Hero />

            <div className="max-w-7xl mx-auto px-6 py-16 dark:bg-[#0f1626]">
                <h2 className="text-3xl font-serif font-extrabold mb-8 dark:text-white">
                    Browse the <span className="italic text-[#e8a020]">collection</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((p, i) => (
                        <div key={i} onClick={() => setSelectedProduct(p)}>
                            <Card {...p} />
                        </div>
                    ))}
                </div>
            </div>

            <Modal
                isOpen={selectedProduct !== null}
                onClose={() => setSelectedProduct(null)}
                title={selectedProduct?.title}
            >
                {selectedProduct && (
                    <div>
                        <div className={`h-40 ${selectedProduct.bg} rounded-xl flex items-center justify-center text-5xl mb-4`}>
                            {selectedProduct.emoji}
                        </div>
                        <p className="text-[#6b5f4e] dark:text-gray-300 mb-2">Region: {selectedProduct.region}</p>
                        <p className="text-[#6b5f4e] dark:text-gray-300 mb-2">Material: {selectedProduct.material}</p>
                        <p className="font-serif font-bold text-xl text-[#2c3e6b]">{selectedProduct.price} / pc</p>
                    </div>
                )}
            </Modal>

            <Footer />
        </>
    )
}

export default Home