import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CART_KEY = "cake-company-cart";
const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(CART_KEY);
    if (saved) setItems(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      itemCount: items.reduce((sum, item) => sum + item.qty, 0),
      addItem: (cake) =>
        setItems((prev) => {
          const existing = prev.find((item) => item.id === cake.id);
          if (existing) {
            return prev.map((item) => (item.id === cake.id ? { ...item, qty: item.qty + 1 } : item));
          }
          return [...prev, { ...cake, qty: 1 }];
        }),
      removeItem: (id) => setItems((prev) => prev.filter((item) => item.id !== id)),
      updateQty: (id, qty) =>
        setItems((prev) =>
          prev
            .map((item) => (item.id === id ? { ...item, qty: Math.max(1, qty) } : item))
            .filter((item) => item.qty > 0),
        ),
      clearCart: () => setItems([]),
    }),
    [items],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
