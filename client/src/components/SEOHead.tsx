/**
 * SEO Head Component - Manages per-page title, meta description, canonical URL, and OG tags
 * Uses document.head manipulation for SPA-based meta tag management
 */
import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogImageAlt?: string;
  type?: string;
}

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663364711481/KY9zpHWoeCd25Pm76rdm47/hero_lake_texoma_sunset-Np8rvCD3JS7qUgKhYcXaJi.png",
  ogImageAlt = "Golden sunset over Lake Texoma near Texoma Lakeside RV Park",
  type = "website",
}: SEOHeadProps) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Helper to set or create meta tags
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Update meta description
    setMeta("name", "description", description);

    // Update canonical
    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", canonical);

    // Update Open Graph tags
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:image:alt", ogImageAlt);
    setMeta("property", "og:type", type);

    // Update Twitter Card tags
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);
    setMeta("name", "twitter:image:alt", ogImageAlt);
  }, [title, description, canonical, ogImage, ogImageAlt, type]);

  return null;
}
