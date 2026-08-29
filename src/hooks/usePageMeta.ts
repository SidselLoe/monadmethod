import { useEffect } from "react";

interface PageMetaOptions {
  /** Full canonical URL for this page, e.g. https://www.monadmethod.com/blog/slug */
  canonical?: string;
  /** og:type — defaults to "website" */
  ogType?: string;
}

const setMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  const previous = el.getAttribute("content");
  el.setAttribute("content", content);
  return previous;
};

const usePageMeta = (
  title: string,
  description?: string,
  options?: PageMetaOptions
) => {
  const canonical = options?.canonical;
  const ogType = options?.ogType;

  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const restores: Array<() => void> = [
      () => {
        document.title = previousTitle;
      },
    ];

    const apply = (attr: "name" | "property", key: string, value: string) => {
      const prev = setMeta(attr, key, value);
      restores.push(() => {
        if (prev !== null) setMeta(attr, key, prev);
      });
    };

    apply("property", "og:title", title);
    apply("name", "twitter:title", title);

    if (description) {
      apply("name", "description", description);
      apply("property", "og:description", description);
      apply("name", "twitter:description", description);
    }

    if (canonical) {
      apply("property", "og:url", canonical);
      const link = document.head.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]'
      );
      if (link) {
        const prevHref = link.getAttribute("href");
        link.setAttribute("href", canonical);
        restores.push(() => {
          if (prevHref) link.setAttribute("href", prevHref);
        });
      }
    }

    if (ogType) {
      apply("property", "og:type", ogType);
    }

    return () => {
      restores.forEach((fn) => fn());
    };
  }, [title, description, canonical, ogType]);
};

export default usePageMeta;
