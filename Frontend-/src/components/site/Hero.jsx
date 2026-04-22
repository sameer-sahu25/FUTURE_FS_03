import heroTart from "@/assets/hero-tart.jpg";
import { Link } from "react-router-dom";
import { Parallax, Reveal } from "@/components/ui/Parallax";

export const Hero = () => {
    return (<section id="home" className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
      <div className="container-tight grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 relative z-10">
          <Reveal direction="down">
            <p className="eyebrow mb-6">Jabalpur's Beloved Bakery · Est. Civil Lines</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-serif text-[14vw] md:text-[8.5rem] leading-[0.95] tracking-tight">
              Cakes,
              <br />
              Pies <span className="italic font-light">&amp;</span>
              <br />
              <span className="italic">Tarts.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 max-w-md">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Creamy, fresh and made-to-order — a decade of celebrating Jabalpur's
                birthdays, anniversaries and tea-time afternoons.
              </p>
              <div className="mt-10 flex items-center flex-wrap gap-6">
                <Link to="/order" className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-accent transition-all hover:-translate-y-1">
                  Order a Cake
                </Link>
                <Link to="/story" className="text-xs uppercase tracking-[0.25em] underline-offset-8 hover:underline decoration-accent decoration-2">
                  Our story
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-5 relative">
          <Parallax offset={60} className="relative z-10">
            <img src={heroTart} alt="Signature fruit tart with cherries" width={1280} height={1280} className="w-full max-w-lg mx-auto rounded-lg shadow-2xl"/>
          </Parallax>
          <div className="absolute -bottom-16 -right-4 md:-right-12 max-w-[16rem] hidden md:block z-20">
            <Reveal delay={0.4} direction="left">
              <div className="bg-background/80 backdrop-blur-md p-6 rounded-sm shadow-xl border border-border/50">
                <div className="text-accent text-5xl leading-none font-serif opacity-50">"</div>
                <p className="text-sm text-muted-foreground italic mt-2 leading-relaxed">
                  Soft, creamy and consistently delicious — our customers return week after week.
                </p>
                <p className="font-script text-2xl text-accent mt-4">— Susan, Head Baker</p>
              </div>
            </Reveal>
          </div>
          {/* Decorative element */}
          <Parallax offset={-120} className="absolute -left-20 -top-20 size-64 rounded-full bg-accent/5 blur-3xl -z-10" />
        </div>
      </div>
    </section>);
};
