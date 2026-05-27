import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  primary?: boolean;
  full?: boolean;
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  onClick?: () => void;
}

export default function Button({ children, primary, full, size = 'md', icon, onClick }: ButtonProps) {
  const pad = size === 'sm' ? 'px-3.5 py-2' : size === 'lg' ? 'px-7 py-4' : 'px-5 py-3';
  const fs = size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-[15px]' : 'text-[13px]';

  return (
    <button
      onClick={onClick}
      className={`
        font-sans font-semibold inline-flex items-center justify-center gap-1.5
        cursor-pointer border-none transition-opacity hover:opacity-90
        ${pad} ${fs}
        ${full ? 'w-full' : ''}
        ${primary
          ? 'bg-accent text-[#FFF8E8] rounded-sm'
          : 'bg-surface text-ink border border-line rounded-sm'
        }
      `}
    >
      {icon}{children}
    </button>
  );
}
