import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { useSEO } from "@/hooks/useSEO";
import { milestones } from "@/data/milestones";
import { Reveal, Parallax } from "@/components/ui/Parallax";
import storefront from "@/assets/brand/storefront.png";
import poster from "@/assets/brand/poster-chocolate.png";

const chapters = [
    {
        eyebrow: "Chapter 01 · Origins",
        title: "A small counter on Civil Lines.",
        body: "The Cake Company opened in one of Jabalpur's most beloved commercial quarters — Aseem Complex, Civil Lines. The first menu was deliberately small: fresh cakes, a few pastries, a handful of tea-time bites. The bet was simple: bake fresher than anyone else in the city, and let the work speak.",
    },
    {
        eyebrow: "Chapter 02 · Growth",
        title: "From bakery to café-hybrid.",
        body: "Within a few years, regulars started asking for more. Sandwiches appeared on the menu, then rolls, then a small Indo-Chinese section. By the late 2010s, what began as a bakery counter had quietly become an everyday destination — students after college, families after dinner, office breaks and birthday pickups all under one roof.",
    },
    {
        eyebrow: "Chapter 03 · Identity",
        title: "Built on consistency, not novelty.",
        body: "Customers kept coming back for the same three things: cakes that tasted as fresh as they looked, a menu wide enough to please a whole table, and staff that remembered your usual order. That reputation — quiet, consistent, dependable — became the brand long before any logo did.",
    },
    {
        eyebrow: "Chapter 04 · Expansion",
        title: "S Square Market opens its doors.",
        body: "A second outlet at S Square Market brought the brand closer to families in another part of the city. With two kitchens running, capacity doubled — and so did the scale of celebration cakes the team could take on each weekend.",
    },
    {
        eyebrow: "Chapter 05 · Online Delivery",
        title: "Cakes that travel across Jabalpur.",
        body: "Going live on Zomato and Swiggy turned a neighbourhood favourite into a city-wide service. Thousands of delivery ratings later, midnight birthday cakes, anniversary surprises and last-minute office orders all leave our kitchens on the same morning they're baked.",
    },
    {
        eyebrow: "Chapter 06 · Today",
        title: "Part of Jabalpur's cake culture.",
        body: "Jabalpur loves to celebrate — and the city's appetite for designer cakes, photo prints, fondant figures and themed bakes keeps growing. We've grown with it: from classics like black forest and butterscotch to campfire designer cakes, kids' theme cakes and rasmalai-fusion bakes you won't find anywhere else.",
    },
];

const Story = () => {
    useSEO({
        title: "Our Story — The Cake Company, Jabalpur",
        description: "More than a decade of baking in Jabalpur — from a single counter on Civil Lines to two outlets and 10,000+ online reviews. Read the full brand story.",
        path: "/story",
    });
    return (<main className="min-h-screen parallax-page bg-background text-foreground overflow-x-hidden">
      <Header />
      <PageHeader script="Our story" eyebrow="Established · Civil Lines, Jabalpur" title={<>A decade of Jabalpur's <span className="italic">sweetest</span> moments.</>} intro="What began as a single bakery counter has grown into one of the city's most-loved dessert names — known for fresh quality, friendly service and a menu that goes far beyond cake."/>

      {/* Hero photo */}
      <section className="pb-16 overflow-hidden">
        <Parallax offset={40} className="container-tight flex justify-center">
          <img src={storefront} alt="The Cake Company, Civil Lines, Jabalpur" className="w-full max-w-[80%] max-h-[70vh] object-cover mx-auto rounded-lg shadow-2xl"/>
        </Parallax>
      </section>

      {/* Chapters */}
      <section className="py-20 md:py-32">
        <div className="container-tight max-w-3xl space-y-32">
          {chapters.map((c, i) => (
            <Reveal key={c.title}>
              <article>
                <p className="eyebrow text-accent">{c.eyebrow}</p>
                <h2 className="font-serif text-3xl md:text-5xl mt-4 leading-tight">{c.title}</h2>
                <p className="mt-8 text-muted-foreground text-lg leading-relaxed">{c.body}</p>
                {i === 1 && (
                  <Parallax offset={30} className="mt-16">
                    <img src={poster} alt="Life is better with chocolate" className="w-full max-w-md rounded-lg shadow-lg" loading="lazy"/>
                  </Parallax>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline summary */}
      <section className="py-24 md:py-40 bg-foreground text-background relative overflow-hidden">
        <Parallax offset={-150} className="absolute left-[-10%] top-[-10%] size-96 rounded-full bg-accent/10 blur-[100px]" />
        <div className="container-tight relative z-10">
          <Reveal>
            <div className="max-w-2xl">
              <p className="font-script text-3xl text-accent">In short</p>
              <h2 className="font-serif text-4xl md:text-5xl mt-3">A decade, in five lines.</h2>
            </div>
          </Reveal>
          <div className="mt-20 grid md:grid-cols-2 gap-x-20 gap-y-16">
            {milestones.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.1}>
                <div className="flex gap-8 group">
                  <div className="font-serif italic text-accent text-3xl shrink-0 w-12 group-hover:scale-110 transition-transform duration-300">0{i + 1}</div>
                  <div>
                    <p className="eyebrow text-background/50">{m.year}</p>
                    <h3 className="font-serif text-2xl mt-1">{m.title}</h3>
                    <p className="mt-4 text-background/70 text-base leading-relaxed">{m.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>);
};
export default Story;

