import { motion } from "framer-motion"

type Props = {
    text?: string;
    className?: string;
    delay?: number;
    children?: React.ReactNode;
};

export default function AnimatedText({ text, className = "", delay = 0, children }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay }}
            className={className}
        >
            {text || children}
        </motion.div>
    )
}

