
export default function Footer() {
    return (
        <>
            <footer className="bg-[#1A2645]">
                <div className="mx-auto flex justify-between px-12 py-8">
                    <div className="md:flex flex-col justify-center w-1/3">
                        <div className="text-yellow-200 font-bold text-2xl">Shilp Setu</div>
                        <div className="text-gray-400">Bridging India's artisans with the world</div>
                    </div>

                    <div className="text-gray-400 w-1/3 flex items-center">
                        <ul className="md:flex justify-around gap-8 ml-10 list-none">
                            <li><a href="/catalog" className="hover:text-white">catalog</a></li>
                            <li><a href="/about" className="hover:text-white">About</a></li>
                            <li><a href="/contact" className="hover:text-white">Contact</a></li>
                            <li><a href="/tc" className="hover:text-white">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    <div className="right w-1/3"></div>
                </div>
            </footer>
        </>
    )
}
