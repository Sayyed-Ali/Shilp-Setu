import { createContext, useContext, useState } from "react"

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const stored = localStorage.getItem("shilp_user")
        return stored ? JSON.parse(stored) : null
    })

    const [token, setToken] = useState(() => {
        return localStorage.getItem("shilp_token") || null
    })

    function login(userData, tokenData) {
        setUser(userData)
        setToken(tokenData)
        localStorage.setItem("shilp_user", JSON.stringify(userData))
        localStorage.setItem("shilp_token", tokenData)
    }

    function logout() {
        setUser(null)
        setToken(null)
        localStorage.removeItem("shilp_user")
        localStorage.removeItem("shilp_token")
    }

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}