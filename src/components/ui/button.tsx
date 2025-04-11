'use client';

interface ButtonProps {
    disabled?: boolean;
    onClick?: () => void;
    title: string;
    icon?: React.ReactNode; // more specific type
    className?: string;
}

export default function Button({
    disabled = false,
    onClick,
    title,
    icon,
    className = '',
}: ButtonProps) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`font-semibold flex items-center gap-3 px-8 py-2 rounded-md border border-white ${
                disabled
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-transparent hover:bg-[#35475F] text-white'
            } ${className}`} // <-- Merge user styles
        >

            {icon}
            {title}
        </button>
    );
}
