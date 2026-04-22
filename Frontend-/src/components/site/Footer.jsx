import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { social } from "@/data/outlets";
const sitemap = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Cakes", to: "/cakes" },
    { label: "Menu", to: "/menu" },
    { label: "Our Story", to: "/story" },
    { label: "Visit", to: "/visit" },
    { label: "Custom Order", to: "/order" },
];
export const Footer = () => {
    return (<footer className="bg-foreground text-background/80 pt-16 pb-10">
      <div className="container-tight grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <p className="font-serif italic text-3xl text-background">The Cake Company</p>
          <p className="eyebrow mt-3 text-background/50">Jabalpur · Madhya Pradesh</p>
          <p className="mt-6 max-w-sm text-sm text-background/60 leading-relaxed">
            A decade of fresh-baked cakes, pastries and bites — celebrating every birthday,
            anniversary and tea-time across Jabalpur.
          </p>
          <a href={social.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-6 text-sm hover:text-accent">
            <Instagram className="size-4"/> @the_cake_company_jabalpur
          </a>
        </div>

        <div>
          <p className="eyebrow text-background/50">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {sitemap.map((l) => (<li key={l.to}>
                <Link to={l.to} className="hover:text-accent transition-colors">{l.label}</Link>
              </li>))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-background/50">Find us</p>
          <ul className="mt-4 space-y-3 text-sm text-background/70">
            <li>Civil Lines · Aseem Complex</li>
            <li>S Square Market</li>
            <li>11 AM — 11 PM, all days</li>
            <li className="pt-2">On Zomato &amp; Swiggy</li>
          </ul>
        </div>
      </div>

      <div className="container-tight mt-14 pt-6 border-t border-background/10 text-xs text-background/40 flex justify-between flex-wrap gap-2">
        <span>© {new Date().getFullYear()} The Cake Company, Jabalpur.</span>
        <span>Crafted with love &amp; buttercream.</span>
      </div>
    </footer>);
};
