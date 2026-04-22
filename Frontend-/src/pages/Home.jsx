import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Testimonial } from "@/components/site/Testimonial";
import { useSEO } from "@/hooks/useSEO";
import { cakes } from "@/data/cakes";
import { Reveal, Parallax } from "@/components/ui/Parallax";
import poster from "@/assets/brand/poster-chocolate.png";
import storefront from "@/assets/brand/storefront.png";

const Home = () => {
    useSEO({
        title: "The Cake Company — Jabalpur's Beloved Bakery & Café",
        description: "Fresh cakes, pastries, sandwiches, Chinese bites and shakes baked daily in Jabalpur. Civil Lines & S Square Market. Order custom celebration cakes online.",
        path: "/",
        jsonLd: {
            "@context": "https://schema.org",
            "@type": "Bakery",
            name: "The Cake Company",
            address: { "@type": "PostalAddress", streetAddress: "Aseem Complex, Civil Lines", addressLocality: "Jabalpur", addressRegion: "MP", addressCountry: "IN" },
            servesCuisine: ["Bakery", "Desserts", "Chinese", "Fast Food"],
            priceRange: "₹₹",
        },
    });
    const featured = cakes.slice(0, 4);
    return (<main className="min-h-screen parallax-page bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />

      {/* Promo strip */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="container-tight grid md:grid-cols-2 gap-16 items-center">
          <Parallax offset={80} className="w-full flex justify-center">
            <img src={poster} alt="Life is better with chocolate" className="w-full max-w-md mx-auto rounded-lg shadow-2xl" loading="lazy"/>
          </Parallax>
          <Reveal delay={0.2}>
            <div>
              <p className="font-script text-3xl text-accent">Fresh today</p>
              <h2 className="font-serif text-5xl md:text-6xl mt-4 leading-tight">
                Life's better with <span className="italic">chocolate.</span>
              </h2>
              <p className="mt-8 text-background/70 leading-relaxed max-w-md text-lg">
                From dark Belgian truffle to mirror-glaze designer cakes — every bake leaves
                our kitchen the morning of your order. Never a day before.
              </p>
              <Link to="/cakes" className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-accent hover:gap-3 transition-all">
                Browse cakes <ArrowRight className="size-4"/>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured cakes */}
      <section className="py-24 md:py-40">
        <div className="container-tight">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
              <div>
                <p className="font-script text-3xl text-accent">Most loved</p>
                <h2 className="font-serif text-4xl md:text-5xl mt-2">Our signature bakes.</h2>
              </div>
              <Link to="/cakes" className="text-sm uppercase tracking-[0.2em] hover:text-accent">View all →</Link>
            </div>
          </Reveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {featured.map((c, index) => (
              <Reveal key={c.id} delay={index * 0.1}>
                <Link to="/cakes" className="group block">
                  <div className="overflow-hidden bg-cream aspect-[4/5] rounded-sm relative shadow-sm hover:shadow-xl transition-shadow duration-500">
                    <img src={c.img} alt={c.name} loading="lazy" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"/>
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
                  </div>
                  <h3 className="font-serif text-2xl mt-6">{c.name}</h3>
                  <p className="text-accent text-sm mt-2 font-medium tracking-wide uppercase">{c.price}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonial />

      {/* Visit CTA */}
      <section className="py-24 md:py-40 bg-cream relative overflow-hidden">
        <Parallax offset={-100} className="absolute -right-20 -top-20 size-80 rounded-full bg-accent/5 blur-3xl" />
        <div className="container-tight grid md:grid-cols-2 gap-16 items-center relative z-10">
          <Reveal>
            <div className="relative group">
              <img src={storefront} alt="The Cake Company storefront, Civil Lines, Jabalpur" className="w-full rounded-lg shadow-xl" loading="lazy"/>
              <div className="absolute -inset-4 border border-accent/20 rounded-lg -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div>
              <p className="font-script text-3xl text-accent">Come say hello</p>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-tight">Two homes across the city.</h2>
              <p className="mt-8 text-muted-foreground max-w-md text-lg leading-relaxed">
                Walk in to either of our outlets, place a custom order, or get it delivered
                anywhere in Jabalpur via Zomato or Swiggy.
              </p>
              <div className="mt-10 flex flex-wrap gap-6">
                <Link to="/visit" className="bg-foreground text-background px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-accent transition-all hover:-translate-y-1">Visit us</Link>
                <Link to="/order" className="px-8 py-4 text-xs uppercase tracking-[0.2em] border border-foreground hover:bg-foreground hover:text-background transition-all hover:-translate-y-1">Custom order</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>);
};
export default Home;

