import { Link } from 'react-router-dom';
import { HomeIcon, SearchIcon, BagIcon, UserIcon } from './Icons';

const tabs = [
  { id: 'home', label: 'Home', Icon: HomeIcon, to: '/mobile/home' },
  { id: 'search', label: 'Discover', Icon: SearchIcon, to: '/mobile/home' },
  { id: 'orders', label: 'Orders', Icon: BagIcon, to: '/mobile/home' },
  { id: 'me', label: 'You', Icon: UserIcon, to: '/mobile/profile' },
];

interface TabBarProps {
  active?: string;
}

export default function TabBar({ active = 'home' }: TabBarProps) {
  return (
    <div className="border-t border-line bg-bg flex justify-around py-2 pb-2.5">
      {tabs.map(({ id, label, Icon, to }) => (
        <Link
          key={id}
          to={to}
          className={`flex flex-col items-center gap-0.5 text-[9px] font-sans font-semibold tracking-wide uppercase no-underline ${
            id === active ? 'text-accent' : 'text-muted'
          }`}
        >
          <Icon size={14} />
          <span>{label}</span>
        </Link>
      ))}
    </div>
  );
}
