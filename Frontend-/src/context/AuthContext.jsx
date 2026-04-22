import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { api } from "@/lib/api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .me()
      .then(setUser)
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const value = useMemo(
    () => ({
      user,
      loading,
      isAuthenticated: Boolean(user),
      signup: async (payload) => {
        const data = await api.signup(payload);
        setUser(data.user);
        return data;
      },
      login: async (payload) => {
        const data = await api.login(payload);
        setUser(data.user);
        return data;
      },
      logout: async () => {
        await api.logout();
        setUser(null);
      },
      refreshMe: async () => {
        const data = await api.me();
        setUser(data);
      },
      updateProfile: async (payload) => {
        const data = await api.updateMe(payload);
        setUser(data.user);
      },
    }),
    [loading, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
