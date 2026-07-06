const BASE_URL = "http://localhost:5001/api"

export async function getAllProducts() {
    const res = await fetch(`${BASE_URL}/products`)
    const data = await res.json()
    if (!res.ok) throw new Error(data.message)
    return data.data
}

export async function createProduct(productData) {
    const res = await fetch(`${BASE_URL}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData)
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.message)
    return data.data
}

export async function updateProduct(id, productData) {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData)
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.message)
    return data.data
}

export async function deleteProduct(id) {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
        method: "DELETE"
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.message)
    return data
}