import { useState } from "react"
import { Input, Button, Loader } from "./ui"

/**
 * Reusable product form for create and update
 * @param {object} initial - initial values (empty for create, product data for edit)
 * @param {function} onSubmit - called with form data when submitted
 * @param {function} onCancel - called when user cancels
 * @param {boolean} loading - shows loader on submit button when true
 */
export default function ProductForm({ initial = {}, onSubmit, onCancel, loading }) {
    const [form, setForm] = useState({
        title: initial.title || "",
        region: initial.region || "",
        material: initial.material || "",
        size: initial.size || "",
        price: initial.price || "",
        moq: initial.moq || "",
        category: initial.category || "",
        image: initial.image || ""
    })

    function handleChange(field) {
        return (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))
    }

    function handleSubmit() {
        onSubmit(form)
    }

    return (
        <div className="flex flex-col gap-1">
            <Input
                label="Product Title"
                placeholder="Hand-woven Woolen Shawl"
                value={form.title}
                onChange={handleChange("title")}
            />
            <div className="grid grid-cols-2 gap-3">
                <Input
                    label="Region"
                    placeholder="Kashmir"
                    value={form.region}
                    onChange={handleChange("region")}
                />
                <Input
                    label="Material"
                    placeholder="Wool"
                    value={form.material}
                    onChange={handleChange("material")}
                />
            </div>
            <div className="grid grid-cols-2 gap-3">
                <Input
                    label="Size"
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
            <div className="grid grid-cols-2 gap-3">
                <Input
                    label="Price (₹)"
                    type="number"
                    placeholder="1200"
                    value={form.price}
                    onChange={handleChange("price")}
                />
                <Input
                    label="MOQ"
                    type="number"
                    placeholder="50"
                    value={form.moq}
                    onChange={handleChange("moq")}
                />
            </div>
            <Input
                label="Image URL"
                placeholder="https://images.unsplash.com/..."
                value={form.image}
                onChange={handleChange("image")}
            />
            <div className="flex gap-3 mt-4">
                {loading ? (
                    <Loader size="sm" />
                ) : (
                    <>
                        <Button variant="primary" onClick={handleSubmit} className="flex-1">
                            Save Product
                        </Button>
                        <Button variant="outline" onClick={onCancel} className="flex-1">
                            Cancel
                        </Button>
                    </>
                )}
            </div>
        </div>
    )
}