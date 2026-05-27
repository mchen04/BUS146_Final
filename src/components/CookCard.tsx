import { StarIcon } from './Icons';
import type { Cook } from '../data/cooks';

interface CookCardProps {
  cook: Cook;
}

export default function CookCard({ cook }: CookCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden" style={{ borderRadius: 12 }}>
        <img
          src={cook.photo}
          alt={cook.signature}
          className="w-full h-[150px] object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="pt-3 px-1 pb-1">
        <div className="flex justify-between items-baseline mb-1">
          <span className="font-serif text-[17px] font-medium">{cook.name}</span>
          <span className="text-xs inline-flex items-center gap-1 text-muted">
            <StarIcon size={11} fill /> {cook.rating}
          </span>
        </div>
        <div className="text-xs text-muted mb-1.5">
          {cook.cuisine} · {cook.neighborhood} · {cook.miles} mi
        </div>
        <div className="text-xs">
          <span className="text-muted">Tonight: </span>
          <span className="font-medium">{cook.signature}</span>
          <span className="text-muted"> · ${cook.price}</span>
        </div>
      </div>
    </div>
  );
}
