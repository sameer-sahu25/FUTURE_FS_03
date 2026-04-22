import { useMemo, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { useSEO } from "@/hooks/useSEO";
import { menu } from "@/data/menu";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
const Menu = () => {
    useSEO({
        title: "Menu — The Cake Company, Jabalpur",
        description: "Full menu — signature cakes, pastries, sandwiches, rolls, Chinese bites, beverages and shakes. Café-bakery in Civil Lines & S Square Market, Jabalpur.",
        path: "/menu",
    });
    const [q, setQ] = useState("");
    const [active, setActive] = useState(menu[0].id);
    const filtered = useMemo(() => {
        if (!q.trim())
            return menu;
        const term = q.toLowerCase();
        return menu
            .map((s) => ({ ...s, items: s.items.filter((i) => i.name.toLowerCase().includes(term)) }))
            .filter((s) => s.items.length > 0);
    }, [q]);
    return (<main className="min-h-screen parallax-page bg-background text-foreground">
      <Header />
      <PageHeader script="Today's menu" eyebrow="Eat in · Take away · Delivery" title={<>The full <span className="italic">menu.</span></>} intro="Cakes, pastries, sandwiches, rolls, Chinese bites and shakes — everything we bake, fry, grill and brew at our two Jabalpur outlets."/>

      {/* Sticky category nav + search */}
      <div className="sticky top-[64px] md:top-[72px] z-20 bg-background/95 backdrop-blur border-b border-border">
        <div className="container-tight py-4 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex gap-2 overflow-x-auto -mx-1 px-1 flex-1">
            {menu.map((s) => (<a key={s.id} href={`#${s.id}`} onClick={() => setActive(s.id)} className={cn("whitespace-nowrap px-4 py-2 text-xs uppercase tracking-[0.2em] border transition-colors", active === s.id ? "bg-foreground text-background border-foreground" : "border-border hover:border-foreground")}>
                {s.title}
              </a>))}
          </div>
          <div className="relative md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"/>
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search the menu" className="w-full pl-10 pr-3 py-2.5 bg-cream text-sm border border-transparent focus:outline-none focus:border-foreground"/>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="container-tight space-y-20">
          {filtered.map((section) => (<div key={section.id} id={section.id} className="scroll-mt-40">
              <p className="font-script text-3xl text-accent">{section.title}</p>
              <h2 className="font-serif text-3xl md:text-4xl mt-2">{section.blurb}</h2>
              <div className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-6">
                {section.items.map((item) => (<div key={item.name} className="flex items-baseline gap-4 border-b border-dashed border-border pb-4">
                    <div className="flex-1">
                      <h3 className="font-serif text-lg">
                        {item.name}
                        {item.eggless && <span className="ml-3 text-[0.6rem] uppercase tracking-[0.2em] text-accent">Eggless</span>}
                        {item.veg && <span className="ml-3 text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">Veg</span>}
                      </h3>
                      {item.desc && <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>}
                    </div>
                    <div className="font-serif text-accent">{item.price}</div>
                  </div>))}
              </div>
            </div>))}

          {filtered.length === 0 && (<p className="text-center text-muted-foreground py-20">Nothing matches "{q}".</p>)}
        </div>
      </section>

      <Footer />
    </main>);
};
export default Menu;
