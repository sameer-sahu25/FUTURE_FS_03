import { useEffect, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useAuth } from "@/context/AuthContext";

const Profile = () => {
  const { user, updateProfile, refreshMe } = useAuth();
  const [form, setForm] = useState({ fullName: "", phone: "", address: "", avatarUrl: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (user) {
      setForm({
        fullName: user.fullName ?? "",
        phone: user.phone ?? "",
        address: user.address ?? "",
        avatarUrl: user.avatarUrl ?? "",
      });
    }
  }, [user]);

  const onSubmit = async (e) => {
    e.preventDefault();
    await updateProfile(form);
    await refreshMe();
    setMessage("Profile updated.");
  };

  return (
    <main className="min-h-screen parallax-page bg-background text-foreground">
      <Header />
      <section className="container-tight py-32 max-w-xl">
        <h1 className="font-serif text-4xl">Profile</h1>
        <form className="mt-8 space-y-4" onSubmit={onSubmit}>
          <input className="w-full border p-3 bg-transparent" value={form.fullName} onChange={(e) => setForm((v) => ({ ...v, fullName: e.target.value }))} placeholder="Full name" />
          <input className="w-full border p-3 bg-transparent" value={form.phone} onChange={(e) => setForm((v) => ({ ...v, phone: e.target.value }))} placeholder="Phone" />
          <textarea className="w-full border p-3 bg-transparent" value={form.address} onChange={(e) => setForm((v) => ({ ...v, address: e.target.value }))} placeholder="Address" />
          <input className="w-full border p-3 bg-transparent" value={form.avatarUrl} onChange={(e) => setForm((v) => ({ ...v, avatarUrl: e.target.value }))} placeholder="Avatar URL" />
          <button className="bg-foreground text-background px-5 py-2.5">Save</button>
          {message && <p className="text-sm text-green-600">{message}</p>}
        </form>
      </section>
      <Footer />
    </main>
  );
};

export default Profile;
