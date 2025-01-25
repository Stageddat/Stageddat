import { motion } from "framer-motion"
import type { SocialLink } from "../types/SocialLink"

export default function SocialIcon({ name, url, icon }: SocialLink) {
    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-all duration-300 hover:scale-110 relative group"
            aria-label={name}
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={`${icon} w-12 h-12 opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-handwriting whitespace-nowrap">
                {name}
            </span>
        </motion.a>
    )
}

