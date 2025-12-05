'use client';

import { motion } from 'framer-motion';

interface BlurTextProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
}

export default function BlurText({
    text,
    className = '',
    delay = 0,
    duration = 1
}: BlurTextProps) {
    return (
        <motion.span
            initial={{ filter: 'blur(10px)', opacity: 0 }}
            animate={{ filter: 'blur(0px)', opacity: 1 }}
            transition={{
                duration,
                delay,
                ease: 'easeOut'
            }}
            className={className}
            style={{ display: 'inline-block' }}
        >
            {text}
        </motion.span>
    );
}
