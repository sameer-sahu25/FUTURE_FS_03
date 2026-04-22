import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useAuth } from "@/context/AuthContext";

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [form, setForm] = useState({ fullName: "", email: "", password: "" });
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(form);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="min-h-screen parallax-page bg-background text-foreground">
      <Header />
      <section className="container-tight py-32 max-w-md">
        <h1 className="font-serif text-4xl">Sign up</h1>
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <input className="w-full border p-3 bg-transparent" placeholder="Full name" value={form.fullName} onChange={(e) => setForm((v) => ({ ...v, fullName: e.target.value }))} />
          <input className="w-full border p-3 bg-transparent" placeholder="Email" type="email" value={form.email} onChange={(e) => setForm((v) => ({ ...v, email: e.target.value }))} />
          <input className="w-full border p-3 bg-transparent" placeholder="Password" type="password" value={form.password} onChange={(e) => setForm((v) => ({ ...v, password: e.target.value }))} />
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button className="w-full bg-foreground text-background py-3">Create account</button>
        </form>
        <p className="mt-4 text-sm">
          Already have an account? <Link className="underline" to="/login">Login</Link>
        </p>
      </section>
      <Footer />
    </main>
  );
};

export default Signup;
