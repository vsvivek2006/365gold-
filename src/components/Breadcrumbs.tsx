import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface Crumb {
  label: string;
  path?: string;
}

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex items-center flex-wrap gap-1 text-gray-500">
        <li>
          <Link to="/" className="hover:text-amber-500 flex items-center">
            <Home className="w-4 h-4" />
          </Link>
        </li>
        {crumbs.map((crumb, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            {crumb.path ? (
              <Link to={crumb.path} className="hover:text-amber-500">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-gray-700 font-medium">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
