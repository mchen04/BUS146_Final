import { Link } from 'react-router-dom';
import Phone from '../components/Phone';
import TabBar from '../components/TabBar';
import Chip from '../components/Chip';
import { PinIcon, UserIcon, SearchIcon, FilterIcon, StarIcon, ShieldIcon, ClockIcon } from '../components/Icons';
import { COOKS } from '../data/cooks';

function MobileHomeContent() {
  const sofia = COOKS[2];
  const nearby = COOKS.slice(0, 3);

  return (
    <>
      <div style={{ padding: '8px 18px 12px' }}>
        {/* Header */}
        <div className="flex justify-between items-center mb-3.5">
          <div>
            <div className="text-[10px] text-muted font-mono tracking-[0.08em] uppercase mb-0.5 flex items-center gap-1">
              <PinIcon size={9} /><span>Oakland · Rockridge</span>
            </div>
            <div className="font-serif text-[24px] font-medium" style={{ letterSpacing: '-0.02em', lineHeight: 1.05 }}>
              Tonight's kitchens
            </div>
          </div>
          <div className="w-9 h-9 rounded-full bg-surface flex items-center justify-center">
            <UserIcon size={16} />
          </div>
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 bg-surface px-3 py-2.5 mb-3.5" style={{ borderRadius: 12 }}>
          <SearchIcon size={14} />
          <span className="text-xs text-muted flex-1">Search cooks, cuisines, dishes…</span>
          <FilterIcon size={14} />
        </div>

        {/* Chips */}
        <div className="flex gap-1.5 overflow-hidden">
          <Chip accent>Tonight</Chip>
          <Chip>≤ 1 mi</Chip>
          <Chip>Under $15</Chip>
          <Chip>Vegan</Chip>
        </div>
      </div>

      {/* Feed */}
      <div className="flex-1 overflow-hidden" style={{ padding: '4px 18px 14px' }}>
        {/* Featured card */}
        <Link to="/mobile/dish" className="no-underline text-ink block">
          <div className="bg-surface overflow-hidden mb-3.5" style={{ borderRadius: 12 }}>
            <img src={sofia.photo} alt={sofia.signature} className="w-full h-[130px] object-cover" />
            <div className="p-3">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <div className="font-serif text-base font-medium">{sofia.name}</div>
                  <div className="text-[10px] text-muted">Oaxacan · Mission · 0.6 mi</div>
                </div>
                <div className="text-[11px] flex items-center gap-1">
                  <StarIcon size={10} fill /> 5.0 · 211
                </div>
              </div>
              <div className="text-xs mt-2">
                <span className="text-muted">Tonight: </span>
                <span className="font-medium">Mole negro tamales · $16</span>
              </div>
              <div className="flex gap-1.5 mt-2.5">
                <Chip size="sm"><ShieldIcon size={9} /> Cert.</Chip>
                <Chip size="sm"><ClockIcon size={9} /> 60 min</Chip>
                <Chip size="sm">Pre-order</Chip>
              </div>
            </div>
          </div>
        </Link>

        <div className="font-mono text-[9px] tracking-[0.1em] uppercase text-muted mb-2">
          ◆ Within half a mile
        </div>

        {/* Compact rows */}
        {nearby.map(c => (
          <Link key={c.name} to="/mobile/profile" className="no-underline text-ink block">
            <div className="flex gap-2.5 mb-3">
              <img src={c.photo} alt={c.cuisine} className="w-16 h-16 object-cover shrink-0" style={{ borderRadius: 6 }} />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <span className="font-serif text-sm font-medium">{c.name}</span>
                  <span className="text-[10px] text-muted">{c.miles} mi</span>
                </div>
                <div className="text-[11px] mt-0.5" style={{ lineHeight: 1.35 }}>
                  {c.signature}
                </div>
                <div className="text-[10px] text-muted mt-1 flex gap-2">
                  <span className="inline-flex items-center gap-0.5"><StarIcon size={8} fill /> {c.rating}</span>
                  <span>· {c.prep}</span>
                  <span>· ${c.price}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <TabBar active="home" />
    </>
  );
}

export default function MobileHome() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center py-12">
      <div>
        <h2 className="font-serif text-[26px] font-medium text-ink text-center mb-6" style={{ letterSpacing: '-0.01em' }}>
          Mobile — Discovery
        </h2>
        <Phone>
          <MobileHomeContent />
        </Phone>
      </div>
    </div>
  );
}
