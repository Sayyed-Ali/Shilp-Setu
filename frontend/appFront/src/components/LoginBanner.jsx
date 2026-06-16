import BannerImg from "../assets/village.jpg"
import { motion, AnimatePresence } from "framer-motion";

export default function LoginBanner({ role }) {
    const content = {
        default: {
            title: "Bridging artisans and buyers",
            subtitle:
                "Connecting Indian craftsmanship with meaningful opportunities."
        },

        artisan: {
            title: "Craft deserves a wider market",
            subtitle:
                "Reach buyers across India with AI-powered listings."
        },

        buyer: {
            title: "Discover authentic Indian craftsmanship",
            subtitle:
                "Source directly from artisans and craft collectives."
        }
    };

    return (
        <div className="relative h-full min-h-[500px] overflow-hidden">

            <img
                src={BannerImg}
                alt="Rural India"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-[#2c3e6b]/75"></div>

            <div className="relative z-10 h-full flex items-center">

                <AnimatePresence mode="wait">

                    <motion.div
                        key={role}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.35 }}
                        className="max-w-md p-12 lg:p-16"
                    >
                        <h2 className="font-serif text-5xl lg:text-6xl font-black text-white leading-tight">
                            {content[role || "default"].title}
                        </h2>

                        <p className="mt-6 text-lg lg:text-xl text-slate-200">
                            {content[role || "default"].subtitle}
                        </p>
                    </motion.div>

                </AnimatePresence>

            </div>
        </div>
    );
}