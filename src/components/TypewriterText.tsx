'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
    text: string;
    className?: string;
    speed?: number;
    delay?: number;
    cursor?: boolean;
    cursorChar?: string;
    onComplete?: () => void;
}

export default function TypewriterText({
    text,
    className = '',
    speed = 50,
    delay = 0,
    cursor = true,
    cursorChar = '|',
    onComplete
}: TypewriterTextProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (currentIndex === 0 && delay > 0) {
            const delayTimeout = setTimeout(() => {
                setCurrentIndex(1);
            }, delay);
            return () => clearTimeout(delayTimeout);
        }

        if (currentIndex > 0 && currentIndex <= text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(text.slice(0, currentIndex));
                setCurrentIndex(currentIndex + 1);
            }, speed);

            return () => clearTimeout(timeout);
        } else if (currentIndex > text.length && !isComplete) {
            setIsComplete(true);
            onComplete?.();
        }
    }, [currentIndex, text, speed, delay, isComplete, onComplete]);

    return (
        <span className={className}>
            {displayedText}
            {cursor && (
                <span className="typewriter-cursor" style={{ opacity: isComplete ? 0 : 1 }}>
                    {cursorChar}
                </span>
            )}
        </span>
    );
}
