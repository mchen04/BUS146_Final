import type { ReactNode } from 'react';

interface ChipProps {
  children: ReactNode;
  accent?: boolean;
  size?: 'sm' | 'md';
}

export default function Chip({ children, accent, size = 'sm' }: ChipProps) {
  const fontSize = size === 'sm' ? 'text-[10px]' : 'text-[11px]';
  const pad = size === 'sm' ? 'px-2.5 py-1' : 'px-3 py-1.5';

  return (
    <span
      className={`
        font-sans font-medium inline-flex items-center gap-1
        tracking-wide uppercase whitespace-nowrap
        ${fontSize} ${pad}
        ${accent
          ? 'bg-accent text-[#FFF8E8]'
          : 'bg-surface text-ink'
        }
      `}
      style={{ borderRadius: 6 }}
    >
      {children}
    </span>
  );
}
