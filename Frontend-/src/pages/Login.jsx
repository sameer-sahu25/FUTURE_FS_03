import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useAuth } from "@/context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(form);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="min-h-screen parallax-page bg-background text-foreground">
      <Header />
      <section className="container-tight py-32 max-w-md">
        <h1 className="font-serif text-4xl">Login</h1>
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <input className="w-full border p-3 bg-transparent" placeholder="Email" type="email" value={form.email} onChange={(e) => setForm((v) => ({ ...v, email: e.target.value }))} />
          <input className="w-full border p-3 bg-transparent" placeholder="Password" type="password" value={form.password} onChange={(e) => setForm((v) => ({ ...v, password: e.target.value }))} />
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button className="w-full bg-foreground text-background py-3">Login</button>
        </form>
        <p className="mt-4 text-sm">
          New user? <Link className="underline" to="/signup">Create account</Link>
        </p>
      </section>
      <Footer />
    </main>
  );
};

export default Login;
