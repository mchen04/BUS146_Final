import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import CookCard from '../components/CookCard';
import { PinIcon, ArrowIcon, ShieldIcon, StarIcon } from '../components/Icons';
import { COOKS } from '../data/cooks';

const NAV_LINKS: { label: string; href: string }[] = [
  { label: 'Browse cooks', href: '#cooks' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Become a cook', href: '#become-a-cook' },
  { label: 'Trust & safety', href: '#trust' },
];

function Nav() {
  const navigate = useNavigate();
  return (
    <nav className="flex items-center justify-between shrink-0 border-b border-line px-6 py-4 lg:px-14 lg:py-5 sticky top-0 bg-bg/95 backdrop-blur-sm z-10">
      <div className="flex items-center gap-6 lg:gap-10">
        <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="no-underline">
          <span className="font-serif text-[22px] lg:text-[26px] font-medium text-ink" style={{ letterSpacing: '-0.01em' }}>
            HomePlate
          </span>
        </a>
        <div className="hidden md:flex gap-7 text-[13px] font-sans">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} className="text-ink font-medium no-underline hover:text-accent transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3 text-[13px]">
        <span className="hidden sm:inline-flex items-center gap-1 text-muted">
          <PinIcon size={12} /> Oakland, CA
        </span>
        <span className="hidden sm:inline text-muted">·</span>
        <span className="font-medium cursor-pointer hover:text-accent transition-colors">Sign in</span>
        <Button primary size="sm" onClick={() => navigate('/mobile/home')}>Open app</Button>
      </div>
    </nav>
  );
}

function Hero() {
  const navigate = useNavigate();
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
            HomePlate is a marketplace for buying & selling honest home cooking — the kind of meal you'd make if you actually had the time tonight.
          </p>
          <div className="flex gap-3 mt-6">
            <Button primary size="lg" onClick={() => navigate('/mobile/home')}>Browse tonight's menu</Button>
            <a href="#become-a-cook"><Button size="lg">Cook & earn</Button></a>
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
    <section id="how-it-works" className="border-b border-line px-6 py-8 lg:px-14 lg:py-8 scroll-mt-16">
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
    <section id="cooks" className="border-b border-line px-6 py-6 lg:px-14 lg:py-6 scroll-mt-16">
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

function BecomeACook() {
  const perks = [
    { title: 'Set your own schedule', desc: 'Cook when you want. List meals for tonight, this week, or just weekends.' },
    { title: 'Keep 92% of every sale', desc: 'HomePlate takes an 8% platform fee — no hidden charges, no tipping pressure.' },
    { title: 'We handle compliance', desc: 'We walk you through your state\'s cottage food or home kitchen permit process.' },
  ];
  return (
    <section id="become-a-cook" className="border-b border-line px-6 py-10 lg:px-14 lg:py-12 scroll-mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">
        <div>
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent mb-4">
            ◆ For home cooks
          </div>
          <h2 className="font-serif text-[36px] lg:text-[48px] font-normal m-0" style={{ letterSpacing: '-0.02em', lineHeight: 1.05 }}>
            Turn your kitchen into a{' '}
            <span className="italic text-accent">neighborhood restaurant.</span>
          </h2>
          <p className="text-[15px] mt-4 max-w-[440px] text-muted" style={{ lineHeight: 1.6 }}>
            You already cook for everyone — your family, your block party, your coworker who "just wants the recipe." Now get paid for it.
          </p>
          <div className="mt-6">
            <Button primary size="lg">Apply to cook on HomePlate</Button>
          </div>
          <div className="flex gap-6 mt-8 text-xs text-muted">
            <div>
              <strong className="block font-serif text-[22px] text-ink font-medium">$1,200</strong>
              avg. monthly earnings
            </div>
            <div>
              <strong className="block font-serif text-[22px] text-ink font-medium">92%</strong>
              goes to you
            </div>
            <div>
              <strong className="block font-serif text-[22px] text-ink font-medium">48 hrs</strong>
              to get approved
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {perks.map(p => (
            <div key={p.title} className="bg-surface p-5 flex gap-4 items-start" style={{ borderRadius: 12 }}>
              <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                <StarIcon size={14} fill />
              </div>
              <div>
                <div className="font-serif text-[18px] font-medium mb-1">{p.title}</div>
                <div className="text-[13px] text-muted" style={{ lineHeight: 1.55 }}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustAndSafety() {
  const points = [
    { title: 'Every cook is vetted', desc: 'Background checks, food safety certification, and a kitchen inspection before anyone lists a meal.' },
    { title: 'Real reviews only', desc: 'You can only review a cook after a verified purchase. No fake ratings, no pay-to-rank.' },
    { title: 'Allergen transparency', desc: 'Cooks list every ingredient. Allergen tags are mandatory — no guesswork for diners.' },
    { title: 'Secure payments', desc: 'Pay through the app. Funds are held until pickup is confirmed. Refunds for no-shows.' },
  ];
  return (
    <section id="trust" className="border-b border-line px-6 py-10 lg:px-14 lg:py-12 scroll-mt-16">
      <div className="text-center mb-8">
        <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent mb-3">
          ◆ Trust & safety
        </div>
        <h2 className="font-serif text-[36px] lg:text-[48px] font-normal m-0 max-w-[640px] mx-auto" style={{ letterSpacing: '-0.02em', lineHeight: 1.05 }}>
          Home-cooked doesn't mean{' '}
          <span className="italic text-accent">unregulated.</span>
        </h2>
        <p className="text-[15px] mt-4 max-w-[520px] mx-auto text-muted" style={{ lineHeight: 1.6 }}>
          Every cook on HomePlate is permitted, insured, and reviewed. We built the platform around the standards we'd want if we were ordering for our own families.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[800px] mx-auto">
        {points.map(p => (
          <div key={p.title} className="bg-surface p-5 flex gap-3.5 items-start" style={{ borderRadius: 12 }}>
            <div className="w-7 h-7 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
              <ShieldIcon size={14} />
            </div>
            <div>
              <div className="font-serif text-[17px] font-medium mb-1">{p.title}</div>
              <div className="text-[13px] text-muted" style={{ lineHeight: 1.55 }}>{p.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 py-8 lg:px-14 lg:py-10 text-center">
      <div className="font-serif text-[22px] font-medium mb-2" style={{ letterSpacing: '-0.01em' }}>
        HomePlate
      </div>
      <p className="text-xs text-muted">
        Home-cooked, from your block. · Oakland, CA · Est. 2025
      </p>
      <p className="text-[11px] text-muted mt-3">
        BUS146 Final Project — Viable Venture Prototype
      </p>
    </footer>
  );
}

export default function Landing() {
  return (
    <div className="bg-bg text-ink font-sans min-h-screen flex flex-col max-w-[1280px] mx-auto">
      <Nav />
      <Hero />
      <HowItWorks />
      <FeaturedCooks />
      <BecomeACook />
      <TrustAndSafety />
      <Footer />
    </div>
  );
}
