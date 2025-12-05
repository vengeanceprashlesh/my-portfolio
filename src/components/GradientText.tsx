'use client';

import { motion } from 'framer-motion';

interface GradientTextProps {
    text: string;
    className?: string;
    colors?: string[];
    animationSpeed?: number;
    animate?: boolean;
}

export default function GradientText({
    text,
    className = '',
    colors = ['#8A2BE2', '#4F46E5', '#60A5FA'],
    animationSpeed = 3,
    animate = true
}: GradientTextProps) {
    const gradientStyle = {
        background: `linear-gradient(90deg, ${colors.join(', ')}, ${colors[0]})`,
        backgroundSize: animate ? '200% auto' : '100% auto',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent'
    };

    if (!animate) {
        return (
            <span className={className} style={gradientStyle}>
                {text}
            </span>
        );
    }

    return (
        <motion.span
            className={`gradient-text ${className}`}
            style={
                {
                    ...gradientStyle,
                    '--animation-speed': `${animationSpeed}s`
                } as React.CSSProperties
            }
        >
            {text}
        </motion.span>
    );
}
