import type { ReactNode } from 'react';

function StatusBar() {
  return (
    <div
      className="h-7 flex items-center justify-between font-sans text-[11px] font-semibold text-ink"
      style={{ padding: '0 18px 0 22px' }}
    >
      <span>9:41</span>
      <div className="flex gap-1.5 items-center">
        <span className="text-[9px]">●●●●</span>
        <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
          <rect x="0.5" y="0.5" width="11" height="8" rx="1.5" stroke="currentColor" />
          <rect x="2" y="2" width="8" height="5" fill="currentColor" />
          <rect x="12" y="3" width="1.5" height="3" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

interface PhoneProps {
  children: ReactNode;
}

export default function Phone({ children }: PhoneProps) {
  return (
    <div
      className="bg-bg text-ink font-sans relative overflow-hidden rounded-[24px] border-[3px] border-ink/10"
      style={{ width: 320, height: 640 }}
    >
      <StatusBar />
      <div className="flex flex-col overflow-hidden" style={{ height: 'calc(100% - 28px)' }}>
        {children}
      </div>
    </div>
  );
}
