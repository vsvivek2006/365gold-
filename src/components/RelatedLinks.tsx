import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface RelatedLink {
  label: string;
  path: string;
}

export default function RelatedLinks({ title, links }: { title: string; links: RelatedLink[] }) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 my-8">
      <h2 className="text-lg font-bold text-gray-900 mb-4">{title}</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className="inline-flex items-center gap-1 text-sm text-amber-600 hover:text-amber-700 font-medium"
            >
              <ChevronRight className="w-4 h-4" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
