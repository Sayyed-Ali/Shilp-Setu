import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Modal from "../components/ui/Modal"
import ProductForm from "../components/ProductForm"
import { useToast } from "../components/ui/Toast"
import { useAuth } from "../context/AuthContext"
import { getAllProducts, createProduct, updateProduct, deleteProduct } from "../api/products"

// sidebar nav items
const sidebarItems = [
    { icon: "", label: "Overview", active: true },
    { icon: "", label: "Listings" },
    { icon: "", label: "Inquiries", badge: 4 },
    { icon: "", label: "AI Generator" },
    { icon: "", label: "Settings" },
    { icon: "", label: "AI Generator", path: "/ai-generator" },
]

function Dashboard() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [formLoading, setFormLoading] = useState(false)
    const [showAddModal, setShowAddModal] = useState(false)
    const [editingProduct, setEditingProduct] = useState(null)
    const [deletingId, setDeletingId] = useState(null)
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const showToast = useToast()
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    useEffect(() => { fetchProducts() }, [])

    async function fetchProducts() {
        try {
            setLoading(true)
            const data = await getAllProducts()
            setProducts(data)
        } catch (err) {
            showToast("Failed to load products", "error")
        } finally {
            setLoading(false)
        }
    }

    async function handleCreate(formData) {
        try {
            setFormLoading(true)
            const newProduct = await createProduct({
                ...formData,
                price: Number(formData.price),
                moq: Number(formData.moq)
            })
            setProducts(prev => [...prev, newProduct])
            setShowAddModal(false)
            showToast("Product added successfully", "success")
        } catch (err) {
            showToast(err.message || "Failed to create product", "error")
        } finally {
            setFormLoading(false)
        }
    }

    async function handleUpdate(formData) {
        try {
            setFormLoading(true)
            const updated = await updateProduct(editingProduct._id, {
                ...formData,
                price: Number(formData.price),
                moq: Number(formData.moq)
            })
            setProducts(prev => prev.map(p => p._id === updated._id ? updated : p))
            setEditingProduct(null)
            showToast("Product updated", "success")
        } catch (err) {
            showToast(err.message || "Failed to update product", "error")
        } finally {
            setFormLoading(false)
        }
    }

    async function handleDelete(id) {
        try {
            setDeletingId(id)
            await deleteProduct(id)
            setProducts(prev => prev.filter(p => p._id !== id))
            showToast("Product deleted", "success")
        } catch (err) {
            showToast(err.message || "Failed to delete", "error")
        } finally {
            setDeletingId(null)
        }
    }

    function handleLogout() {
        logout()
        navigate("/login")
    }

    return (
        <div className="flex h-screen bg-[#f5f0e8] dark:bg-[#0a0f1f] overflow-hidden">

            {/* SIDEBAR */}
            <div className={`${sidebarOpen ? "w-56" : "w-16"} transition-all duration-200 bg-[#1a2645] flex flex-col flex-shrink-0`}>

                {/* logo */}
                <div className="flex items-center gap-3 px-4 py-5 border-b border-[#2a3a60]">
                    <div className="w-8 h-8 bg-[#e8a020] rounded-lg flex items-center justify-center text-[#1a2645] font-bold text-sm flex-shrink-0">S</div>
                    {sidebarOpen && <span className="font-serif font-bold text-white text-lg">Shilp Setu</span>}
                </div>

                {/* nav items */}
                <nav className="flex flex-col gap-1 px-2 py-4 flex-1">
                    {sidebarItems.map((item, i) => (
                        <div
                            key={i}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-colors
                                ${item.active
                                    ? "bg-[#e8a020]/15 text-[#e8a020]"
                                    : "text-[#7a8eaa] hover:bg-white/5 hover:text-white"}`}
                        >
                            <span className="text-base flex-shrink-0">{item.icon}</span>
                            {sidebarOpen && (
                                <span className="text-sm font-medium flex-1">{item.label}</span>
                            )}
                            {sidebarOpen && item.badge && (
                                <span className="bg-[#c4502c] text-white text-xs font-bold px-1.5 py-0.5 rounded-full">{item.badge}</span>
                            )}
                        </div>
                    ))}
                </nav>

                {/* user + logout at bottom */}
                <div className="px-2 py-4 border-t border-[#2a3a60]">
                    {sidebarOpen && user && (
                        <div className="flex items-center gap-2 px-3 py-2 mb-2">
                            <div className="w-7 h-7 rounded-full bg-[#e8a020] flex items-center justify-center text-[#1a2645] font-bold text-xs flex-shrink-0">
                                {user.name?.[0]?.toUpperCase()}
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-white text-xs font-semibold truncate">{user.name}</p>
                                <p className="text-[#7a8eaa] text-xs truncate">{user.role}</p>
                            </div>
                        </div>
                    )}
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-3 py-2 rounded-xl text-[#7a8eaa] hover:text-white hover:bg-white/5 transition-colors w-full"
                    >
                        <span className="text-base"></span>
                        {sidebarOpen && <span className="text-sm font-medium">Logout</span>}
                    </button>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="flex-1 flex flex-col overflow-hidden">

                {/* top bar */}
                <div className="bg-white dark:bg-[#111827] border-b border-[#e5ddd0] dark:border-[#1f2a45] px-6 py-3 flex items-center justify-between flex-shrink-0">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="p-1.5 rounded-lg hover:bg-[#f5f0e8] dark:hover:bg-[#1a2238] transition-colors"
                        >
                            <div className="w-5 flex flex-col gap-1">
                                <div className="h-0.5 bg-[#6b5f4e] dark:bg-gray-400 rounded"></div>
                                <div className="h-0.5 bg-[#6b5f4e] dark:bg-gray-400 rounded w-3/4"></div>
                                <div className="h-0.5 bg-[#6b5f4e] dark:bg-gray-400 rounded"></div>
                            </div>
                        </button>
                        <div>
                            <h1 className="font-serif font-bold text-lg dark:text-white">Dashboard</h1>
                            <p className="text-xs text-[#6b5f4e] dark:text-gray-400">Welcome back, {user?.name} </p>
                        </div>
                    </div>
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="bg-[#c4502c] hover:bg-[#a83c20] text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm flex items-center gap-2"
                    >
                        <span>+</span> Add Product
                    </button>
                </div>

                {/* scrollable content */}
                <div className="flex-1 overflow-y-auto p-6">

                    {/* metric cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        {[
                            { label: "Total Listings", value: products.length, icon: "", color: "text-[#2c3e6b] dark:text-indigo-300", bg: "bg-indigo-50 dark:bg-indigo-900/20" },
                            { label: "AI Descriptions", value: products.filter(p => p.ai).length, icon: "", color: "text-[#e8a020]", bg: "bg-yellow-50 dark:bg-yellow-900/20" },
                            { label: "New Inquiries", value: 4, icon: "", color: "text-[#4a6b50]", bg: "bg-green-50 dark:bg-green-900/20" },
                            { label: "Confirmed Orders", value: 11, icon: "", color: "text-[#c4502c]", bg: "bg-orange-50 dark:bg-orange-900/20" },
                        ].map((card, i) => (
                            <div key={i} className="bg-white dark:bg-[#111827] border border-[#e5ddd0] dark:border-[#1f2a45] rounded-2xl p-4">
                                <div className="flex justify-between items-start mb-3">
                                    <p className="text-xs font-semibold text-[#6b5f4e] dark:text-gray-400 uppercase tracking-wide">{card.label}</p>
                                    <div className={`${card.bg} w-8 h-8 rounded-lg flex items-center justify-center text-sm`}>{card.icon}</div>
                                </div>
                                <p className={`font-serif font-bold text-3xl ${card.color}`}>{card.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* products table */}
                    <div className="bg-white dark:bg-[#111827] border border-[#e5ddd0] dark:border-[#1f2a45] rounded-2xl overflow-hidden">
                        <div className="flex justify-between items-center px-5 py-4 border-b border-[#e5ddd0] dark:border-[#1f2a45]">
                            <div>
                                <h2 className="font-semibold text-base dark:text-white">All Listings</h2>
                                <p className="text-xs text-[#6b5f4e] dark:text-gray-400 mt-0.5">{products.length} products in catalog</p>
                            </div>
                        </div>

                        {loading ? (
                            <div className="flex justify-center py-16">
                                <div className="w-8 h-8 border-4 border-[#ddd3c4] dark:border-[#2a3552] border-t-[#2c3e6b] rounded-full animate-spin"></div>
                            </div>
                        ) : products.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-16 text-center">
                                <div className="text-5xl mb-4"></div>
                                <p className="font-semibold text-[#1e1a14] dark:text-white mb-1">No products yet</p>
                                <p className="text-sm text-[#6b5f4e] dark:text-gray-400 mb-4">Add your first product to get started</p>
                                <button
                                    onClick={() => setShowAddModal(true)}
                                    className="bg-[#2c3e6b] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#1a2645] transition-colors"
                                >
                                    + Add Product
                                </button>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-[#faf7f2] dark:bg-[#0f1626]">
                                            <th className="text-left px-5 py-3 text-xs font-bold text-[#6b5f4e] dark:text-gray-400 uppercase tracking-wide">Product</th>
                                            <th className="text-left px-5 py-3 text-xs font-bold text-[#6b5f4e] dark:text-gray-400 uppercase tracking-wide hidden md:table-cell">Region</th>
                                            <th className="text-left px-5 py-3 text-xs font-bold text-[#6b5f4e] dark:text-gray-400 uppercase tracking-wide hidden lg:table-cell">Category</th>
                                            <th className="text-left px-5 py-3 text-xs font-bold text-[#6b5f4e] dark:text-gray-400 uppercase tracking-wide">Price</th>
                                            <th className="text-left px-5 py-3 text-xs font-bold text-[#6b5f4e] dark:text-gray-400 uppercase tracking-wide hidden md:table-cell">AI</th>
                                            <th className="text-left px-5 py-3 text-xs font-bold text-[#6b5f4e] dark:text-gray-400 uppercase tracking-wide">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((product, i) => (
                                            <tr
                                                key={product._id}
                                                className={`border-t border-[#e5ddd0] dark:border-[#1f2a45] hover:bg-[#faf7f2] dark:hover:bg-[#151d30] transition-colors`}
                                            >
                                                <td className="px-5 py-3.5">
                                                    <div className="flex items-center gap-3">
                                                        {product.image ? (
                                                            <img src={product.image} alt={product.title} className="w-10 h-10 rounded-xl object-cover flex-shrink-0 border border-[#e5ddd0] dark:border-[#2a3552]" />
                                                        ) : (
                                                            <div className="w-10 h-10 rounded-xl bg-[#efe8da] dark:bg-[#2a3552] flex-shrink-0" />
                                                        )}
                                                        <div>
                                                            <p className="font-medium text-sm dark:text-white">{product.title}</p>
                                                            <p className="text-xs text-[#6b5f4e] dark:text-gray-400">{product.material}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-3.5 text-sm text-[#6b5f4e] dark:text-gray-400 hidden md:table-cell">{product.region}</td>
                                                <td className="px-5 py-3.5 hidden lg:table-cell">
                                                    <span className="bg-[#efe8da] dark:bg-[#2a3552] text-[#6b5f4e] dark:text-gray-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                                                        {product.category}
                                                    </span>
                                                </td>
                                                <td className="px-5 py-3.5">
                                                    <p className="font-semibold text-sm text-[#2c3e6b] dark:text-indigo-300">₹{product.price}</p>
                                                    <p className="text-xs text-[#b5a898] dark:text-gray-500">MOQ {product.moq}</p>
                                                </td>
                                                <td className="px-5 py-3.5 hidden md:table-cell">
                                                    {product.ai ? (
                                                        <span className="bg-[#e8a020]/15 text-[#e8a020] text-xs font-bold px-2 py-1 rounded-full">AI</span>
                                                    ) : (
                                                        <span className="text-xs text-[#b5a898] dark:text-gray-500">—</span>
                                                    )}
                                                </td>
                                                <td className="px-5 py-3.5">
                                                    <div className="flex gap-2">
                                                        <button
                                                            onClick={() => setEditingProduct(product)}
                                                            className="text-xs font-semibold bg-[#2c3e6b]/10 dark:bg-indigo-900/30 text-[#2c3e6b] dark:text-indigo-300 px-3 py-1.5 rounded-lg hover:bg-[#2c3e6b] hover:text-white transition-colors"
                                                        >
                                                            Edit
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(product._id)}
                                                            disabled={deletingId === product._id}
                                                            className="text-xs font-semibold bg-red-50 dark:bg-red-900/20 text-red-500 px-3 py-1.5 rounded-lg hover:bg-red-500 hover:text-white transition-colors disabled:opacity-50"
                                                        >
                                                            {deletingId === product._id ? "..." : "Delete"}
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* ADD modal */}
            <Modal isOpen={showAddModal} onClose={() => setShowAddModal(false)} title="Add New Product">
                <ProductForm onSubmit={handleCreate} onCancel={() => setShowAddModal(false)} loading={formLoading} />
            </Modal>

            {/* EDIT modal */}
            <Modal isOpen={editingProduct !== null} onClose={() => setEditingProduct(null)} title="Edit Product">
                <ProductForm initial={editingProduct || {}} onSubmit={handleUpdate} onCancel={() => setEditingProduct(null)} loading={formLoading} />
            </Modal>
        </div>
    )
}

export default Dashboard