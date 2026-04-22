import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { OrderForm } from "@/components/order/OrderForm";
import { useSEO } from "@/hooks/useSEO";
const Order = () => {
    useSEO({
        title: "Custom Order — The Cake Company, Jabalpur",
        description: "Order a custom celebration cake from The Cake Company, Jabalpur. Choose flavour, size, theme, message and delivery — we'll bake it the same morning.",
        path: "/order",
    });
    return (<main className="min-h-screen parallax-page bg-background text-foreground">
      <Header />
      <PageHeader script="Place an order" eyebrow="Custom celebration cakes" title={<>Tell us about your <span className="italic">moment.</span></>} intro="Birthday, anniversary, baby shower, office surprise — fill in the details and we'll confirm your order on WhatsApp within minutes."/>

      <section className="py-16 md:py-24">
        <div className="container-tight grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <OrderForm />
          </div>
          <aside className="space-y-8 text-sm">
            <div>
              <p className="eyebrow">How it works</p>
              <ol className="mt-4 space-y-4 text-muted-foreground">
                <li><span className="text-foreground font-medium">1.</span> Fill the form with your cake details.</li>
                <li><span className="text-foreground font-medium">2.</span> We confirm availability &amp; price on WhatsApp.</li>
                <li><span className="text-foreground font-medium">3.</span> Pay 50% advance to lock the slot.</li>
                <li><span className="text-foreground font-medium">4.</span> Pick up or get delivery the same morning.</li>
              </ol>
            </div>
            <div className="bg-cream p-6">
              <p className="eyebrow text-accent">Lead time</p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Standard cakes: <strong>4–6 hours</strong>. Designer / theme / fondant cakes:
                <strong> 24–48 hours</strong>. For weddings &amp; tiered cakes, please order at least 3 days ahead.
              </p>
            </div>
            <div className="bg-cream p-6">
              <p className="eyebrow text-accent">Delivery</p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Free pickup at both outlets. City-wide delivery in Jabalpur charged at actuals.
                For instant orders, also available on Zomato &amp; Swiggy.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>);
};
export default Order;
