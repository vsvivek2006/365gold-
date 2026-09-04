import { useEffect } from 'react';

export interface SEOData {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
}

const SITE_URL = 'https://gold-365.net';

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function SEO({ title, description, path, ogTitle, ogDescription }: SEOData) {
  useEffect(() => {
    const canonical = `${SITE_URL}${path}`;
    document.title = title;
    setMeta('name', 'description', description);
    setLink('canonical', canonical);
    setMeta('property', 'og:title', ogTitle || title);
    setMeta('property', 'og:description', ogDescription || description);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:type', 'website');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', ogTitle || title);
    setMeta('name', 'twitter:description', ogDescription || description);
  }, [title, description, path, ogTitle, ogDescription]);

  return null;
}
