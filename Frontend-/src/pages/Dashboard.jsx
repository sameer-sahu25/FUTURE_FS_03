import { Link } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

const Dashboard = () => {
  const { user } = useAuth();
  const { itemCount } = useCart();

  return (
    <main className="min-h-screen parallax-page bg-background text-foreground">
      <Header />
      <section className="container-tight py-32">
        <p className="eyebrow">Welcome back</p>
        <h1 className="font-serif text-4xl mt-2">{user?.fullName}</h1>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="border p-6">
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="mt-2">{user?.email}</p>
          </div>
          <div className="border p-6">
            <p className="text-sm text-muted-foreground">Role</p>
            <p className="mt-2 capitalize">{user?.role}</p>
          </div>
          <div className="border p-6">
            <p className="text-sm text-muted-foreground">Cart Items</p>
            <p className="mt-2">{itemCount}</p>
          </div>
        </div>
        <div className="mt-8 flex gap-4">
          <Link className="bg-foreground text-background px-5 py-2.5" to="/profile">Edit Profile</Link>
          <Link className="border border-border px-5 py-2.5" to="/cart">View Cart</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Dashboard;
