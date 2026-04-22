import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { useSEO } from "@/hooks/useSEO";
import { toast } from "@/hooks/use-toast";
import { cakes, cakeCategories } from "@/data/cakes";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { Reveal, PageEntrance } from "@/components/ui/Parallax";
import { motion } from "framer-motion";

const Cakes = () => {
    useSEO({
        title: "Cakes — The Cake Company, Jabalpur",
        description: "Browse our signature cakes — chocolate truffle, red velvet, designer and theme cakes. Fresh-baked daily in Jabalpur. Customise any cake.",
        path: "/cakes",
    });
    const [active, setActive] = useState("All");
    const { addItem } = useCart();
    const list = useMemo(() => active === "All" ? cakes : cakes.filter((c) => c.category === active), [active]);

    return (
      <PageEntrance>
        <main className="min-h-screen parallax-page bg-background text-foreground overflow-x-hidden">
          <Header />
          <PageHeader script="Our cakes" eyebrow="Signature collection" title={<>Baked fresh, <span className="italic">every morning.</span></>} intro="A handful of our most-loved bakes. Customise any cake — flavour, size, message, theme — we'll bake it for your moment."/>

          <section className="py-16 md:py-24">
            <div className="container-tight">
              {/* Filters */}
              <div className="flex flex-wrap gap-3 md:gap-4 mb-16">
                {cakeCategories.map((cat, idx) => (
                  <Reveal key={cat} delay={idx * 0.05} direction="down">
                    <button 
                      onClick={() => setActive(cat)} 
                      className={cn(
                        "px-6 py-3 text-[0.65rem] font-bold uppercase tracking-[0.25em] border transition-all duration-300", 
                        active === cat
                          ? "bg-foreground text-background border-foreground shadow-lg shadow-foreground/10"
                          : "border-border hover:border-foreground hover:-translate-y-1"
                      )}
                    >
                      {cat}
                    </button>
                  </Reveal>
                ))}
              </div>

              {/* Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
                {list.map((c, index) => (
                  <Reveal key={c.id} delay={index * 0.1}>
                    <article className="group">
                      <div className="overflow-hidden bg-cream aspect-[4/5] relative rounded-sm shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                        <img src={c.img} alt={c.name} loading="lazy" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"/>
                        {c.eggless && (
                          <motion.span 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground text-[0.6rem] font-bold uppercase tracking-[0.25em] px-3 py-1.5 shadow-sm"
                          >
                            Eggless option
                          </motion.span>
                        )}
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                      </div>
                      <div className="mt-8 flex items-baseline justify-between gap-4">
                        <h3 className="font-serif text-3xl group-hover:text-accent transition-colors">{c.name}</h3>
                        <span className="text-accent font-serif text-xl whitespace-nowrap">{c.price}</span>
                      </div>
                      <p className="mt-3 text-base text-muted-foreground leading-relaxed">{c.desc}</p>
                      
                      <div className="mt-8 flex items-center gap-6">
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            addItem(c);
                            toast({
                                title: "Added to cart",
                                description: `${c.name} has been added to your cart.`,
                            });
                          }} 
                          className="text-[0.65rem] font-bold uppercase tracking-[0.25em] bg-foreground text-background px-6 py-3 hover:bg-accent transition-colors shadow-md"
                        >
                          Add to cart
                        </motion.button>
                        <Link to={`/order?cake=${encodeURIComponent(c.name)}`} className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-accent hover:underline decoration-2 underline-offset-8">
                          Customise →
                        </Link>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>

              {list.length === 0 && (
                <Reveal>
                  <p className="text-center text-muted-foreground py-32 text-lg italic font-serif">No cakes in this category yet.</p>
                </Reveal>
              )}
            </div>
          </section>

          <Footer />
        </main>
      </PageEntrance>
    );
};
export default Cakes;

