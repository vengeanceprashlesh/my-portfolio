'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface SplitTextProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    variant?: 'fade-up' | 'fade-in' | 'bounce';
    splitBy?: 'character' | 'word';
}

export default function SplitText({
    text,
    className = '',
    delay = 0,
    duration = 0.05,
    variant = 'fade-up',
    splitBy = 'character'
}: SplitTextProps) {
    const items = useMemo(() => {
        if (splitBy === 'word') {
            return text.split(' ');
        }
        return text.split('');
    }, [text, splitBy]);

    const variants = {
        'fade-up': {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
        },
        'fade-in': {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        },
        'bounce': {
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300 } }
        }
    };

    const selectedVariant = variants[variant];

    return (
        <span className={className} style={{ display: 'inline-block' }}>
            {items.map((item, index) => (
                <motion.span
                    key={`${item}-${index}`}
                    initial="hidden"
                    animate="visible"
                    variants={selectedVariant}
                    transition={{
                        duration: variant === 'bounce' ? 0.6 : 0.4,
                        delay: delay + index * duration,
                        ease: variant === 'bounce' ? 'easeOut' : [0.25, 0.46, 0.45, 0.94]
                    }}
                    style={{ display: 'inline-block' }}
                >
                    {item === ' ' ? '\u00A0' : item}
                    {splitBy === 'word' && index < items.length - 1 && '\u00A0'}
                </motion.span>
            ))}
        </span>
    );
}
