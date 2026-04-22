import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { useSEO } from "@/hooks/useSEO";
import { milestones } from "@/data/milestones";
import about from "@/assets/about-cakes.jpg";
import storefront from "@/assets/brand/storefront.png";
const values = [
    { title: "Baked the same morning", body: "Every cake leaves our kitchen the day of your order. Never refrigerated overnight, never a day before." },
    { title: "Real ingredients, always", body: "Belgian chocolate, fresh cream, seasonal fruit and pure butter — no shortcuts on what goes in." },
    { title: "Made for your moment", body: "From a child's first birthday to a quiet anniversary — every order is treated like it's the only one we'll bake today." },
];
const About = () => {
    useSEO({
        title: "About — The Cake Company, Jabalpur",
        description: "More than a decade of fresh-baked cakes and café favourites in Jabalpur. Meet the bakery behind 10,000+ happy reviews.",
        path: "/about",
    });
    return (<main className="min-h-screen parallax-page bg-background text-foreground">
      <Header />
      <PageHeader script="Our story in short" eyebrow="About us" title={<>A modern bakery rooted in Jabalpur's love for <span className="italic">celebration.</span></>} intro="From a single counter on Civil Lines to a name trusted across the city, we've spent more than a decade turning ordinary days into occasions."/>

      {/* Intro split */}
      <section className="py-24 md:py-32">
        <div className="container-tight grid md:grid-cols-2 gap-14 items-center">
          <img src={about} alt="Assorted cupcakes" className="w-full" loading="lazy"/>
          <div>
            <p className="eyebrow">Cakes with love</p>
            <h2 className="font-serif text-3xl md:text-4xl mt-4 leading-tight">
              A bakery that grew up with the city.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              The Cake Company began on Civil Lines as a small, fresh-bake counter. Over a
              decade later, we operate two outlets, a full café-hybrid menu, and a busy online
              delivery service — but the brief for every cake is still the same as on day one:
              fresh, generous, and made with care.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
            { k: "10+", v: "Years baking" },
            { k: "10K+", v: "Happy reviews" },
            { k: "2", v: "Outlets in city" },
        ].map((s) => (<div key={s.v}>
                  <div className="font-serif text-3xl">{s.k}</div>
                  <div className="eyebrow mt-1">{s.v}</div>
                </div>))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container-tight">
          <div className="max-w-2xl">
            <p className="font-script text-3xl text-accent">What we stand for</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">Three things we never compromise.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {values.map((v, i) => (<div key={v.title}>
                <div className="font-serif italic text-accent text-2xl">0{i + 1}</div>
                <h3 className="font-serif text-2xl mt-4">{v.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{v.body}</p>
              </div>))}
          </div>
        </div>
      </section>

      {/* Mini timeline */}
      <section className="py-24 md:py-32">
        <div className="container-tight grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <img src={storefront} alt="The Cake Company storefront, Civil Lines" className="w-full" loading="lazy"/>
          </div>
          <div className="md:col-span-8">
            <p className="font-script text-3xl text-accent">A decade in five chapters</p>
            <h2 className="font-serif text-4xl mt-3">How we got here.</h2>
            <div className="mt-10 space-y-8">
              {milestones.map((m, i) => (<div key={m.title} className="flex gap-6 border-t border-border pt-6">
                  <div className="font-serif italic text-accent text-xl shrink-0 w-12">0{i + 1}</div>
                  <div>
                    <p className="eyebrow">{m.year}</p>
                    <h3 className="font-serif text-xl mt-1">{m.title}</h3>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{m.body}</p>
                  </div>
                </div>))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>);
};
export default About;
