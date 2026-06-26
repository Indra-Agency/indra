import React from 'react';
import Link from 'next/link';

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'white' | 'green';
  className?: string;
  children: React.ReactNode;
}

export function NeoButton({
  href,
  variant = 'primary',
  className = '',
  children,
  ...props
}: NeoButtonProps) {
  const variantClass = variant === 'primary' ? 'btn-neo-green' : variant === 'green' ? 'btn-neo-green' : 'btn-neo-white';
  const combinedClassName = `btn-neo ${variantClass} flex items-center justify-center gap-2 ${className}`;

  if (href) {
    if (href.startsWith('#') || href.startsWith('mailto:')) {
      return (
        <a href={href} className={combinedClassName}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
