import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
    size?: 'small' | 'medium' | 'large';
    icon?: React.ReactNode;
    disabled?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'medium',
    icon,
    disabled = false,
    className = '',
    ...props
}) => {
    const baseClasses = `
        inline-flex items-center justify-center 
        rounded-lg font-medium 
        transition-all duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
    `;

    const variantClasses = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm',
        secondary: 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 shadow-sm',
        ghost: 'text-gray-700 hover:bg-gray-100',
        danger: 'bg-red-600 text-white hover:bg-red-700 shadow-sm',
    };

    const sizeClasses = {
        small: 'px-3 py-1.5 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
    };

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
            disabled={disabled}
            {...props}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </button>
    );
};

export default Button;