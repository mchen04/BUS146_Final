import { Link } from 'react-router-dom';
import Phone from '../components/Phone';
import TabBar from '../components/TabBar';
import Chip from '../components/Chip';
import Button from '../components/Button';
import { ArrowIcon, HeartIcon, StarIcon, ShieldIcon, BagIcon } from '../components/Icons';
import { COOKS } from '../data/cooks';

function MetaTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-surface p-2.5" style={{ borderRadius: 6 }}>
      <div className="text-[9px] text-muted font-mono tracking-[0.08em] uppercase mb-1">
        {label}
      </div>
      <div className="text-[13px] font-semibold">{value}</div>
    </div>
  );
}

function DishContent() {
  const sofia = COOKS[2];

  return (
    <>
      {/* Hero photo */}
      <div className="relative shrink-0">
        <img
          src="https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=640&h=480&fit=crop"
          alt="Mole negro tamales"
          className="w-full object-cover"
          style={{ height: 240 }}
        />
        <Link
          to="/mobile/home"
          aria-label="Go back"
          className="absolute top-3 left-3 w-8 h-8 rounded-full bg-bg flex items-center justify-center text-ink"
        >
          <span className="inline-flex rotate-180"><ArrowIcon size={14} /></span>
        </Link>
        <button aria-label="Save to favorites" className="absolute top-3 right-3 w-8 h-8 rounded-full bg-bg flex items-center justify-center text-ink border-none cursor-pointer">
          <HeartIcon size={14} />
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-auto" style={{ padding: '14px 18px 12px' }}>
        <div className="flex gap-1.5 mb-2">
          <Chip size="sm">Oaxacan</Chip>
          <Chip size="sm">Gluten-free</Chip>
        </div>
        <h2
          className="font-serif font-medium m-0"
          style={{ fontSize: 26, letterSpacing: '-0.02em', lineHeight: 1.05 }}
        >
          Mole Negro Tamales
        </h2>
        <p className="text-xs text-muted mt-1.5" style={{ lineHeight: 1.5 }}>
          A 32-ingredient mole, slow-cooked the way my grandmother taught me. Three tamales, hand-folded the morning you order.
        </p>

        {/* Cook line */}
        <Link to="/mobile/profile" className="no-underline text-ink">
          <div className="flex items-center gap-2.5 mt-3.5 py-2.5 border-t border-b border-line">
            <img
              src={sofia.avatar}
              alt={sofia.name}
              className="w-9 h-9 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="text-xs font-semibold">Sofia M. · Mission</div>
              <div className="text-[10px] text-muted mt-0.5 flex gap-2">
                <span className="inline-flex items-center gap-0.5"><StarIcon size={8} fill /> 5.0 · 211</span>
                <span className="inline-flex items-center gap-0.5"><ShieldIcon size={8} /> Certified</span>
              </div>
            </div>
            <span className="text-[10px] text-muted inline-flex items-center gap-0.5">
              View profile <ArrowIcon size={9} />
            </span>
          </div>
        </Link>

        {/* Meta grid */}
        <div className="grid grid-cols-2 gap-2 mt-3">
          <MetaTile label="Prep time" value="60 min" />
          <MetaTile label="Pickup" value="Today 6–8pm" />
          <MetaTile label="Portions" value="3 tamales" />
          <MetaTile label="Plates left" value="6 of 20" />
        </div>
      </div>

      {/* Sticky order bar */}
      <div className="flex items-center gap-2.5 border-t border-line bg-bg" style={{ padding: '12px 18px' }}>
        <div>
          <div className="text-[10px] text-muted font-mono tracking-[0.08em] uppercase">From</div>
          <div className="font-serif text-[22px] font-medium" style={{ lineHeight: 1 }}>
            $16<span className="text-[11px] text-muted ml-1">/plate</span>
          </div>
        </div>
        <div className="flex-1">
          <Button primary full size="md" icon={<BagIcon size={13} />}>Add to order</Button>
        </div>
      </div>

      <TabBar active="home" />
    </>
  );
}

export default function MobileDish() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center py-12">
      <div>
        <h2 className="font-serif text-[26px] font-medium text-ink text-center mb-6" style={{ letterSpacing: '-0.01em' }}>
          Mobile — Dish Detail
        </h2>
        <Phone>
          <DishContent />
        </Phone>
      </div>
    </div>
  );
}
