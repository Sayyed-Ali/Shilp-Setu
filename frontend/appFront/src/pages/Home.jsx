import { useEffect, useState } from "react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Card from '../components/Card'
import { Modal, Loader, useToast } from '../components/ui/index'
import { data } from "react-router-dom"

function Home() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const showToast = useToast()

    useEffect(() => {
        fetch("http://localhost:5001/api/products")
            .then(res => {
                if (!res.ok) throw new Error("Failed to fetch products")
                return res.json()
            })
            .then(data => {
                setProducts(data.data)
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                showToast("Failed to load products", "error")
                setLoading(false)
            })
    }, [])

    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <Hero />

                <div className="max-w-7xl mx-auto px-6 py-16 dark:bg-[#0f1626] flex-1">
                    <h2 className="text-3xl font-serif font-extrabold mb-8 dark:text-white">
                        Browse the <span className="italic text-[#e8a020]">collection</span>
                    </h2>

                    {loading ? (
                        <div className="flex justify-center py-20">
                            <Loader size="lg" text="Loading products..." />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((p) => (
                                <div key={p.id} onClick={() => setSelectedProduct(p)}>
                                    <Card {...p} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <Modal
                    isOpen={selectedProduct !== null}
                    onClose={() => setSelectedProduct(null)}
                    title={selectedProduct?.title}
                >
                    {selectedProduct && (
                        <div>
                            <div className="h-48 rounded-xl overflow-hidden mb-4 bg-[#f5f0e8]">
                                {selectedProduct.image ? (
                                    <img
                                        src={selectedProduct.image}
                                        alt={selectedProduct.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-[#b5a898] text-sm">
                                        No image
                                    </div>
                                )}
                            </div>
                            <p className="text-[#6b5f4e] dark:text-gray-300 mb-2">Region: {selectedProduct.region}</p>
                            <p className="text-[#6b5f4e] dark:text-gray-300 mb-2">Material: {selectedProduct.material}</p>
                            <p className="font-serif font-bold text-xl text-[#2c3e6b] dark:text-indigo-300">₹{selectedProduct.price} / pc</p>
                        </div>
                    )}
                </Modal>

                <Footer />
            </div>
        </>
    )
}

export default Home