import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  ogDescription?: string;
}

export default function SEO({ title, description, ogDescription }: SEOProps) {
  useEffect(() => {
    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    }

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", ogDescription ?? description);
    }
  }, [title, description, ogDescription]);

  return null;
}
