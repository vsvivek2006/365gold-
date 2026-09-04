import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export interface LinkCardItem {
  title: string;
  description: string;
  path: string;
  icon?: string;
}

export default function LinkCards({ cards }: { cards: LinkCardItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card) => (
        <Link
          key={card.path}
          to={card.path}
          className="group block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-amber-400 transition-all"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
            {card.title}
          </h3>
          <p className="text-sm text-gray-600 mb-3 leading-relaxed">{card.description}</p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-amber-600">
            Learn more
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
      ))}
    </div>
  );
}
