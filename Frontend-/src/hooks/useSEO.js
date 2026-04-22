import { useEffect } from "react";
const upsertMeta = (name, content) => {
    let m = document.querySelector(`meta[name="${name}"]`);
    if (!m) {
        m = document.createElement("meta");
        m.setAttribute("name", name);
        document.head.appendChild(m);
    }
    m.setAttribute("content", content);
};
const upsertCanonical = (href) => {
    let l = document.querySelector('link[rel="canonical"]');
    if (!l) {
        l = document.createElement("link");
        l.setAttribute("rel", "canonical");
        document.head.appendChild(l);
    }
    l.setAttribute("href", href);
};
export const useSEO = ({ title, description, path = "/", jsonLd }) => {
    useEffect(() => {
        document.title = title;
        upsertMeta("description", description);
        upsertCanonical(window.location.origin + path);
        let script = null;
        if (jsonLd) {
            script = document.createElement("script");
            script.type = "application/ld+json";
            script.text = JSON.stringify(jsonLd);
            script.dataset.seo = "page";
            document.head.appendChild(script);
        }
        return () => {
            if (script && script.parentNode)
                script.parentNode.removeChild(script);
        };
    }, [title, description, path, jsonLd]);
};
