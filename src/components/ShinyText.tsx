'use client';

interface ShinyTextProps {
    text: string;
    className?: string;
    shimmerColor?: string;
    speed?: number;
    disabled?: boolean;
}

export default function ShinyText({
    text,
    className = '',
    shimmerColor = 'rgba(255, 255, 255, 0.5)',
    speed = 3,
    disabled = false
}: ShinyTextProps) {
    if (disabled) {
        return <span className={className}>{text}</span>;
    }

    return (
        <span
            className={`shiny-text ${className}`}
            style={
                {
                    '--shimmer-color': shimmerColor,
                    '--animation-speed': `${speed}s`
                } as React.CSSProperties
            }
        >
            {text}
        </span>
    );
}
