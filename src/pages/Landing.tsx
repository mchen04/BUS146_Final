import { Link } from 'react-router-dom';
import Button from '../components/Button';
import CookCard from '../components/CookCard';
import { PinIcon, ArrowIcon } from '../components/Icons';
import { COOKS } from '../data/cooks';

function Nav() {
  const links = ['Browse cooks', 'How it works', 'Become a cook', 'Trust & safety'];
  return (
    <nav
      className="flex items-center justify-between shrink-0 border-b border-line px-6 py-4 lg:px-14 lg:py-5"
    >
      <div className="flex items-center gap-6 lg:gap-10">
        <Link to="/" className="no-underline">
          <span className="font-serif text-[22px] lg:text-[26px] font-medium text-ink" style={{ letterSpacing: '-0.01em' }}>
            Hearth
          </span>
        </Link>
        <div className="hidden md:flex gap-7 text-[13px] font-sans">
          {links.map(l => (
            <span key={l} className="text-ink font-medium cursor-pointer hover:text-accent transition-colors">{l}</span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3 text-[13px]">
        <span className="hidden sm:inline-flex items-center gap-1 text-muted">
          <PinIcon size={12} /> Oakland, CA
        </span>
        <span className="hidden sm:inline text-muted">·</span>
        <span className="font-medium cursor-pointer hover:text-accent transition-colors">Sign in</span>
        <Button primary size="sm">Open app</Button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="border-b border-line py-8 px-6 lg:px-14 lg:py-[52px]">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-8 lg:gap-14">
        <div>
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent mb-5">
              ◆ Now serving Oakland · Berkeley · Alameda
            </div>
            <h1
              className="font-serif font-normal m-0 text-[48px] md:text-[72px] lg:text-[92px]"
              style={{ letterSpacing: '-0.02em', lineHeight: 0.96 }}
            >
              Home-cooked,{' '}
              <span className="italic text-accent">from your block.</span>
            </h1>
            <p className="text-base mt-5 max-w-[480px] text-muted" style={{ lineHeight: 1.55 }}>
              Hearth is a marketplace for buying & selling honest home cooking — the kind of meal you'd make if you actually had the time tonight.
            </p>
            <div className="flex gap-3 mt-6">
              <Button primary size="lg">Browse tonight's menu</Button>
              <Button size="lg">Cook & earn</Button>
            </div>
            <div className="flex gap-7 mt-8 text-xs text-muted">
              <div>
                <strong className="block font-serif text-[26px] text-ink font-medium">212</strong>
                vetted cooks
              </div>
              <div>
                <strong className="block font-serif text-[26px] text-ink font-medium">34</strong>
                cuisines
              </div>
              <div>
                <strong className="block font-serif text-[26px] text-ink font-medium">0</strong>
                middlemen
              </div>
            </div>
          </div>
          <div className="overflow-hidden hidden lg:block" style={{ borderRadius: 12 }}>
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop"
              alt="Home cook preparing a meal"
              className="w-full object-cover transition-transform duration-500 hover:scale-105"
              style={{ height: 400 }}
            />
          </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: '01', title: 'Browse', body: 'See what neighbors are cooking tonight, this weekend, or for the week.' },
    { n: '02', title: 'Order', body: 'Pre-order or grab a plate that\'s ready in 30. Pickup or short-radius delivery.' },
    { n: '03', title: 'Eat', body: 'Real home cooking, often warmer than a restaurant. Review the cook, save favorites.' },
  ];
  return (
    <section className="border-b border-line px-6 py-8 lg:px-14 lg:py-8">
      <div className="flex justify-between items-baseline mb-4">
        <h2 className="font-serif text-[26px] font-medium m-0" style={{ letterSpacing: '-0.01em' }}>
          How it works
        </h2>
        <span className="text-xs text-muted font-mono tracking-[0.1em] uppercase">3 steps</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {steps.map(s => (
          <div
            key={s.n}
            className="bg-surface p-5 transition-shadow duration-200 hover:shadow-[0_2px_12px_rgba(42,30,18,0.06)]"
            style={{ borderRadius: 12 }}
          >
            <div className="font-mono text-[11px] tracking-[0.1em] text-accent mb-2.5">
              {s.n}
            </div>
            <div className="font-serif text-[22px] font-medium mb-2">
              {s.title}
            </div>
            <div className="text-[13px] text-muted font-sans" style={{ lineHeight: 1.55 }}>
              {s.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedCooks() {
  const cooks = COOKS.slice(0, 4);
  return (
    <section className="flex-1 overflow-hidden px-6 py-6 lg:px-14 lg:py-6">
      <div className="flex justify-between items-baseline mb-3.5">
        <h2 className="font-serif text-[26px] font-medium m-0" style={{ letterSpacing: '-0.01em' }}>
          Featured cooks
        </h2>
        <Link to="/mobile/home" className="text-[13px] text-muted inline-flex items-center gap-1.5 no-underline hover:text-accent transition-colors">
          See all 212 <ArrowIcon size={12} />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
        {cooks.map(c => (
          <Link key={c.name} to="/mobile/dish" className="no-underline text-ink">
            <CookCard cook={c} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function Landing() {
  return (
    <div className="bg-bg text-ink font-sans min-h-screen flex flex-col max-w-[1280px] mx-auto">
      <Nav />
      <Hero />
      <HowItWorks />
      <FeaturedCooks />
    </div>
  );
}
