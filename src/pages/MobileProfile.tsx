import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Phone from '../components/Phone';
import TabBar from '../components/TabBar';
import { HeartIcon, StarIcon, PinIcon, ShieldIcon } from '../components/Icons';
import { COOKS, AMARA_MENU } from '../data/cooks';

function Stat({ top, sub, icon }: { top: string; sub: string; icon: ReactNode }) {
  return (
    <div className="flex-1">
      <div className="text-[13px] font-semibold flex items-center gap-1">
        {icon}{top}
      </div>
      <div className="text-[10px] text-muted mt-0.5">{sub}</div>
    </div>
  );
}

function ProfileContent() {
  const amara = COOKS[0];

  return (
    <>
      {/* Cover */}
      <div className="relative shrink-0">
        <img
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=640&h=300&fit=crop"
          alt="Amara O.'s kitchen"
          className="w-full object-cover"
          style={{ height: 130 }}
        />
        <div
          className="absolute border-[3px] border-bg overflow-hidden"
          style={{ left: 16, bottom: -28, width: 64, height: 64, borderRadius: 999 }}
        >
          <img src={amara.avatar} alt={amara.name} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex-1 overflow-auto" style={{ padding: '36px 18px 12px' }}>
        <div className="flex justify-between items-start mb-1">
          <div>
            <div className="font-serif text-[22px] font-medium" style={{ letterSpacing: '-0.01em' }}>
              Amara O.
            </div>
            <div className="text-[11px] text-muted mt-0.5">
              Nigerian home cook · Fruitvale
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center">
            <HeartIcon size={14} />
          </div>
        </div>

        {/* Stats row */}
        <div className="flex gap-4 py-3 border-b border-line mt-2">
          <Stat top="4.9" sub="127 reviews" icon={<StarIcon size={10} fill />} />
          <Stat top="0.4 mi" sub="from you" icon={<PinIcon size={10} />} />
          <Stat top="Certified" sub="food safety" icon={<ShieldIcon size={10} />} />
        </div>

        <p className="text-xs text-muted mt-3" style={{ lineHeight: 1.55 }}>
          Cooks Tues–Fri evenings out of her certified Fruitvale kitchen. Specializes in Lagos street food and Sunday rice.
        </p>

        {/* Menu header */}
        <div className="flex justify-between items-baseline mt-4.5 mb-2.5">
          <div className="font-serif text-base font-medium">Menu this week</div>
          <span className="text-[10px] text-muted font-mono tracking-[0.08em] uppercase">
            {AMARA_MENU.length} dishes
          </span>
        </div>

        {/* Menu items */}
        {AMARA_MENU.map((m, i) => (
          <Link key={m.name} to="/mobile/dish" className="no-underline text-ink block">
            <div
              className={`flex items-center gap-2.5 py-2 ${i < AMARA_MENU.length - 1 ? 'border-b border-line' : ''}`}
            >
              <img
                src={amara.photo}
                alt={m.name}
                className="w-12 h-12 object-cover shrink-0 rounded-sm"
              />
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-medium">{m.name}</div>
                <div className="text-[10px] text-muted mt-0.5">
                  {m.day} · {m.left} left
                </div>
              </div>
              <div className="text-right">
                <div className="font-serif text-[15px] font-medium">${m.price}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <TabBar active="search" />
    </>
  );
}

export default function MobileProfile() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center py-12">
      <div>
        <h2 className="font-serif text-[26px] font-medium text-ink text-center mb-6" style={{ letterSpacing: '-0.01em' }}>
          Mobile — Cook Profile
        </h2>
        <Phone>
          <ProfileContent />
        </Phone>
      </div>
    </div>
  );
}
