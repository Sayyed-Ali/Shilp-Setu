import logo from '../assets/logo.svg'
import { FaBars, FaTimes } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5"
import { CgProfile } from "react-icons/cg"
import { useState } from 'react';
import { useTheme } from "../context/ThemeContext"
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const { theme, toggleTheme } = useTheme()

    return (
        <>
            <div className='border-b-2 dark:border-[#1f2a45] dark:bg-[#0f1626]'>
                <nav className="navbar flex mt-4 pl-4 font-serif">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className='flex items-center gap-2 flex-shrink-0'>
                            <img src={logo} alt="Shilp Setu Logo" className='w-auto"' />
                        </a>
                    </div>

                    {/* Center links — hidden on mobile */}
                    <ul className="hidden md:flex items-center gap-8 ml-10 list-none text-xl">
                        <li><a href="/" className="text-[#6B5F4E] hover:text-[#1E1A14] dark:text-gray-300 dark:hover:text-white font-medium transition-colors">Catalog</a></li>
                        <li><a href="/dashboard" className="text-[#6B5F4E] hover:text-[#1E1A14] dark:text-gray-300 dark:hover:text-white font-medium transition-colors">How it Works</a></li>
                        <li><a href="/about" className="text-[#6B5F4E] hover:text-[#1E1A14] dark:text-gray-300 dark:hover:text-white font-medium transition-colors">About</a></li>
                    </ul>

                    {/* Right side */}
                    <div className="flex items-center gap-4 ml-auto mr-4">
                        <div className='hidden md:flex items-center gap-2'>
                            <a href="/login" className='border-2 border-[#ddd3c4] dark:border-[#2a3552] text-[#1e1a14] dark:text-white rounded-lg p-2 mr-3 px-6'>Admin login</a>
                            <a href="/catalog" className=' border-2 rounded-lg p-2 mr-3 bg-[#2c3e6b] text-white px-6'>Browse Crafts</a>
                        </div>

                        {/* Notification icon */}
                        <button className="relative p-2 rounded-lg hover:bg-[#EFE8DA] transition-colors">
                            <IoNotificationsOutline className="text-3xl text-[#2C3E6B]" />
                            {/* Red dot */}
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#C4502C] rounded-full"></span>
                        </button>

                        {/* Profile icon */}
                        <button className="p-2 rounded-lg hover:bg-[#EFE8DA] transition-colors">
                            <CgProfile className="text-3xl text-[#1E1A14]" />
                        </button>

                        {/* toggle theme*/}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg hover:bg-[#EFE8DA] dark:hover:bg-gray-700 transition-colors"
                        >
                            {theme === "light" ? <IoMoonOutline className="text-2xl text-[#2C3E6B]" /> : <IoSunnyOutline className="text-2xl text-yellow-400" />}
                        </button>

                        {/* Hamburger — only on mobile */}
                        <button
                            className="md:hidden p-2 rounded-lg hover:bg-[#EFE8DA] transition-colors"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                        </button>
                    </div>
                </nav>
                {/* MOBILE MENU — slides in when menuOpen is true */}
                {menuOpen && (
                    <div className="md:hidden bg-[#FDFAF5] border-t border-[#DDD3C4] px-6 py-4 flex flex-col gap-4 text-lg">
                        <a href="/" className="text-[#1E1A14] font-medium py-2 border-b border-[#EFE8DA]" onClick={() => setMenuOpen(false)}>Catalog</a>
                        <a href="/about" className="text-[#1E1A14] font-medium py-2 border-b border-[#EFE8DA]" onClick={() => setMenuOpen(false)}>For Buyers</a>
                        <a href="/dashboard" className="text-[#1E1A14] font-medium py-2 border-b border-[#EFE8DA]" onClick={() => setMenuOpen(false)}>How it Works</a>
                        <a href="/about" className="text-[#1E1A14] font-medium py-2 border-b border-[#EFE8DA]" onClick={() => setMenuOpen(false)}>About</a>
                        <div className="flex flex-col gap-2 pt-2">
                            <a href="/login" className="border-2 border-[#DDD3C4] dark:border-[#2a3552] text-[#1e1a14] dark:text-white rounded-lg px-5 py-2.5 font-semibold text-center">Admin Login</a>
                            <a href="/catalog" className="bg-[#2C3E6B] text-white rounded-lg px-5 py-2.5 font-semibold text-center">Browse Crafts</a>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}