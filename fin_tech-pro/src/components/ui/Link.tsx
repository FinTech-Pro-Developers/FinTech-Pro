import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: 'default' | 'subtle' | 'button';
  className?: string;
}

const Link: React.FC<LinkProps> = ({
  children,
  href,
  variant = 'default',
  className = '',
  ...props
}) => {
  const baseClasses = `
    transition-colors duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
    rounded-sm
    ${className}
  `;

  const variantClasses = {
    default: 'text-blue-600 hover:text-blue-800 underline hover:no-underline',
    subtle: 'text-gray-600 hover:text-blue-600',
    button: `
      inline-block px-4 py-2
      bg-blue-600 text-white hover:bg-blue-700
      rounded-lg font-medium w-fit
    `,
  };

  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses[variant]}`}
      {...props}  
    >
      {children}
    </a>
  );
};

export default Link;