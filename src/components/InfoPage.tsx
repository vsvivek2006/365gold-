import { Link } from 'react-router-dom';

export interface PageSection {
  heading: string;
  content: string[];
  list?: string[];
}

export interface PageData {
  path: string;
  title: string;
  description: string;
  h1: string;
  breadcrumb: string;
  intro: string;
  sections: PageSection[];
  faq?: { question: string; answer: string }[];
  relatedLinks?: { label: string; path: string }[];
}

export default function InfoPage({ data }: { data: PageData }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="text-sm mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center flex-wrap gap-1 text-gray-500">
          <li>
            <Link to="/" className="hover:text-amber-500">Home</Link>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-gray-700 font-medium">{data.breadcrumb}</li>
        </ol>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{data.h1}</h1>
      <p className="text-lg text-gray-600 leading-relaxed mb-8">{data.intro}</p>

      {data.sections.map((section, i) => (
        <section key={i} className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">{section.heading}</h2>
          {section.content.map((para, j) => (
            <p key={j} className="text-gray-700 leading-relaxed mb-3">{para}</p>
          ))}
          {section.list && (
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              {section.list.map((item, k) => (
                <li key={k}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      {data.faq && data.faq.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {data.faq.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-4 bg-white">
                <h3 className="font-semibold text-gray-900 mb-2">{item.question}</h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {data.relatedLinks && data.relatedLinks.length > 0 && (
        <div className="bg-amber-50 rounded-xl p-6 my-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Pages</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {data.relatedLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="inline-flex items-center gap-1 text-sm text-amber-700 hover:text-amber-800 font-medium"
                >
                  &rarr; {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
