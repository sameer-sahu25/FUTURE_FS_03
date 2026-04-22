const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4000";

const request = async (path, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers ?? {}),
    },
    ...options,
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message ?? "Request failed");
  }
  return data;
};

export const api = {
  signup: (payload) => request("/api/auth/signup", { method: "POST", body: JSON.stringify(payload) }),
  login: (payload) => request("/api/auth/login", { method: "POST", body: JSON.stringify(payload) }),
  logout: () => request("/api/auth/logout", { method: "POST", body: JSON.stringify({}) }),
  me: () => request("/api/users/me"),
  updateMe: (payload) => request("/api/users/me", { method: "PATCH", body: JSON.stringify(payload) }),
};
