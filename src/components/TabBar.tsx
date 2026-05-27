import { HomeIcon, SearchIcon, BagIcon, UserIcon } from './Icons';

const tabs = [
  { id: 'home', label: 'Home', Icon: HomeIcon },
  { id: 'search', label: 'Discover', Icon: SearchIcon },
  { id: 'orders', label: 'Orders', Icon: BagIcon },
  { id: 'me', label: 'You', Icon: UserIcon },
];

interface TabBarProps {
  active?: string;
}

export default function TabBar({ active = 'home' }: TabBarProps) {
  return (
    <div className="border-t border-line bg-bg flex justify-around py-2 pb-2.5">
      {tabs.map(({ id, label, Icon }) => (
        <div
          key={id}
          className={`flex flex-col items-center gap-0.5 text-[9px] font-sans font-semibold tracking-wide uppercase ${
            id === active ? 'text-accent' : 'text-muted'
          }`}
        >
          <Icon size={14} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
