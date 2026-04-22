import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { items, removeItem, updateQty, clearCart } = useCart();

  return (
    <main className="min-h-screen parallax-page bg-background text-foreground">
      <Header />
      <section className="container-tight py-32">
        <h1 className="font-serif text-4xl">Your cart</h1>
        {items.length === 0 ? (
          <p className="mt-6 text-muted-foreground">Your cart is empty.</p>
        ) : (
          <div className="mt-8 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="border p-4 flex items-center gap-4">
                <img src={item.img} alt={item.name} className="size-16 object-cover" />
                <div className="flex-1">
                  <p className="font-serif text-xl">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.price}</p>
                </div>
                <input type="number" min="1" value={item.qty} onChange={(e) => updateQty(item.id, Number(e.target.value))} className="w-16 border p-2 bg-transparent" />
                <button onClick={() => removeItem(item.id)} className="text-sm underline">Remove</button>
              </div>
            ))}
            <button onClick={clearCart} className="mt-4 text-sm uppercase tracking-[0.2em] bg-foreground text-background px-5 py-2.5">Clear Cart</button>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
};

export default Cart;
