import { Phone, MapPin, Clock, Instagram, ExternalLink } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { useSEO } from "@/hooks/useSEO";
import { outlets, social } from "@/data/outlets";
const Visit = () => {
    useSEO({
        title: "Visit — The Cake Company, Jabalpur",
        description: "Two outlets in Jabalpur — Civil Lines (Aseem Complex) and S Square Market. Open 11 AM to 11 PM daily. Find directions, hours and delivery links.",
        path: "/visit",
        jsonLd: {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "The Cake Company",
            address: outlets.map((o) => ({ "@type": "PostalAddress", streetAddress: o.address, addressLocality: "Jabalpur", addressRegion: "MP", addressCountry: "IN" })),
            openingHours: "Mo-Su 11:00-23:00",
        },
    });
    return (<main className="min-h-screen parallax-page bg-background text-foreground">
      <Header />
      <PageHeader script="Visit us" eyebrow="Civil Lines · S Square Market" title={<>Two homes across <span className="italic">Jabalpur.</span></>} intro="Drop in for a slice, place a custom order, or get it delivered anywhere in the city via Zomato and Swiggy."/>

      <section className="py-16 md:py-24">
        <div className="container-tight space-y-20">
          {outlets.map((o, i) => (<div key={o.id} className={`grid md:grid-cols-2 gap-10 items-stretch ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="aspect-[4/3] bg-cream overflow-hidden">
                <iframe title={`${o.name} map`} src={o.mapEmbed} className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
              </div>
              <div className="bg-cream p-8 md:p-12 flex flex-col">
                <p className="eyebrow text-accent">Outlet 0{i + 1}</p>
                <h2 className="font-serif text-3xl md:text-4xl mt-2">{o.name}</h2>

                <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <MapPin className="size-4 mt-0.5 text-accent shrink-0"/>
                    <span>{o.address}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="size-4 mt-0.5 text-accent shrink-0"/>
                    <span>{o.hours}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="size-4 mt-0.5 text-accent shrink-0"/>
                    <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="hover:text-accent">{o.phone}</a>
                  </li>
                </ul>

                <div className="mt-auto pt-8 flex flex-wrap gap-3">
                  <a href={o.mapLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors">
                    Get directions <ExternalLink className="size-3.5"/>
                  </a>
                  <a href={social.zomato} target="_blank" rel="noreferrer" className="px-5 py-3 text-xs uppercase tracking-[0.2em] border border-foreground hover:bg-foreground hover:text-background transition-colors">
                    Zomato
                  </a>
                  <a href={social.swiggy} target="_blank" rel="noreferrer" className="px-5 py-3 text-xs uppercase tracking-[0.2em] border border-foreground hover:bg-foreground hover:text-background transition-colors">
                    Swiggy
                  </a>
                </div>
              </div>
            </div>))}
        </div>
      </section>

      {/* Social strip */}
      <section className="py-20 bg-foreground text-background">
        <div className="container-tight text-center">
          <p className="font-script text-3xl text-accent">Stay in touch</p>
          <h2 className="font-serif text-3xl md:text-4xl mt-3">Tag us in your celebrations.</h2>
          <a href={social.instagram} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 text-sm hover:text-accent">
            <Instagram className="size-4"/> @the_cake_company_jabalpur
          </a>
        </div>
      </section>

      <Footer />
    </main>);
};
export default Visit;
