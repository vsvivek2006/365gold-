import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export interface CTALink {
  label: string;
  path: string;
}

export default function CTASection({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description: string;
  primary: CTALink;
  secondary?: CTALink;
}) {
  return (
    <section className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 sm:p-12 text-center my-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">{title}</h2>
      <p className="text-slate-800 max-w-2xl mx-auto mb-6">{description}</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          to={primary.path}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
        >
          {primary.label}
          <ArrowRight className="w-4 h-4" />
        </Link>
        {secondary && (
          <Link
            to={secondary.path}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-gray-100 transition-colors border border-slate-300"
          >
            {secondary.label}
          </Link>
        )}
      </div>
    </section>
  );
}
