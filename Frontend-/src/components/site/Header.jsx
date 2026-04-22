import { useEffect, useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Cakes", to: "/cakes" },
    { label: "Menu", to: "/menu" },
    { label: "Story", to: "/story" },
    { label: "Visit", to: "/visit" },
];

const NavItem = ({ to, label, isActive, children, mobile }) => (
  <NavLink 
    to={to} 
    end={to === "/"} 
    className={cn(
      "relative tracking-wide transition-colors group py-1 flex items-center gap-2",
      mobile ? "text-lg py-3 border-b border-border/40 w-full" : "text-sm",
      isActive ? "text-accent" : "hover:text-accent"
    )}
  >
    {label || children}
    {!mobile && (
      <motion.span 
        className="absolute bottom-0 left-0 w-full h-[1px] bg-accent origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isActive ? 1 : 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: "circOut" }}
      />
    )}
    {mobile && isActive && (
      <motion.span 
        layoutId="mobileActive"
        className="absolute left-0 w-1 h-6 bg-accent rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
    )}
  </NavLink>
);

export const Header = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { isAuthenticated, logout } = useAuth();
    const { itemCount } = useCart();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [open]);

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    const isLinkActive = (to) => 
      location.pathname === to || (to !== "/" && location.pathname.startsWith(to));

    return (<header className={cn("fixed top-0 inset-x-0 z-40 transition-all duration-500", scrolled ? "bg-background/80 backdrop-blur-xl shadow-[0_1px_0_0_hsl(var(--border)/0.5)]" : "bg-transparent")}>
      <div className="container-tight flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 py-4 md:py-6 relative">
        <Link to="/" className="flex flex-col items-center group shrink-0" aria-label="The Cake Company Home">
          <motion.span 
            className="font-serif italic text-xl md:text-2xl whitespace-nowrap"
            whileHover={{ y: -1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            The Cake Company
          </motion.span>
          <span className="eyebrow text-[0.55rem] md:text-[0.6rem] opacity-60 group-hover:opacity-100 transition-opacity whitespace-nowrap mt-1 uppercase tracking-[0.2em]">
            Jabalpur · Est. Civil Lines
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {links.map((l) => (
            <NavItem key={l.to} to={l.to} label={l.label} isActive={isLinkActive(l.to)} />
          ))}
          
          {isAuthenticated ? (<>
              <NavItem to="/cart" isActive={isLinkActive("/cart")}>
                <ShoppingCart className="size-4" />
                <span>Cart</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={itemCount}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    className="ml-0.5"
                  >
                    ({itemCount})
                  </motion.span>
                </AnimatePresence>
              </NavItem>
              <NavItem to="/dashboard" label="Dashboard" isActive={isLinkActive("/dashboard")} />
              <motion.button 
                onClick={logout} 
                whileHover={{ scale: 1.05, color: "hsl(var(--accent))" }}
                whileTap={{ scale: 0.95 }}
                className="text-[0.6rem] font-bold uppercase tracking-[0.25em] border border-border/50 px-4 py-2 hover:border-accent transition-all"
              >
                LOGOUT
              </motion.button>
            </>) : (<>
              <NavItem to="/login" label="Login" isActive={isLinkActive("/login")} />
              <NavItem to="/signup" label="Sign up" isActive={isLinkActive("/signup")} />
            </>)}
          
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/order" className="text-[0.65rem] font-bold uppercase tracking-[0.3em] bg-foreground text-background px-6 py-3 hover:bg-accent transition-colors shadow-lg shadow-foreground/5 flex items-center gap-2 group">
              <span>ORDER</span>
              <span className="w-1 h-1 rounded-full bg-accent group-hover:bg-background transition-colors" />
              <span>CAKE</span>
            </Link>
          </motion.div>
        </nav>

        <button aria-label={open ? "Close menu" : "Open menu"} className="md:hidden p-2 transition-transform hover:scale-110 absolute right-6 top-1/2 -translate-y-1/2" onClick={() => setOpen((v) => !v)}>
          <AnimatePresence mode="wait">
            <motion.div
              key={open ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {open ? <X className="size-5"/> : <Menu className="size-5"/>}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {open && (<motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background border-t border-border overflow-hidden shadow-2xl h-[calc(100vh-80px)]"
          >
            <nav className="container-tight flex flex-col py-8 gap-1 h-full overflow-y-auto" aria-label="Mobile navigation">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavItem to={l.to} label={l.label} isActive={isLinkActive(l.to)} mobile />
                </motion.div>
              ))}
              {isAuthenticated ? (<>
                  <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: links.length * 0.05 }}>
                    <NavItem to="/cart" isActive={isLinkActive("/cart")} mobile>
                      <ShoppingCart className="size-5" /> Cart ({itemCount})
                    </NavItem>
                  </motion.div>
                  <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: (links.length + 1) * 0.05 }}>
                    <NavItem to="/dashboard" label="Dashboard" isActive={isLinkActive("/dashboard")} mobile />
                  </motion.div>
                  <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: (links.length + 2) * 0.05 }}>
                    <button 
                      onClick={logout} 
                      className="flex items-center gap-2 py-4 border-b border-border/40 w-full text-left text-muted-foreground hover:text-accent transition-colors uppercase tracking-widest text-[0.7rem] font-bold"
                    >
                      LOGOUT
                    </button>
                  </motion.div>
                </>) : (<>
                  <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: links.length * 0.05 }}>
                    <NavItem to="/login" label="Login" isActive={isLinkActive("/login")} mobile />
                  </motion.div>
                  <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: (links.length + 1) * 0.05 }}>
                    <NavItem to="/signup" label="Sign up" isActive={isLinkActive("/signup")} mobile />
                  </motion.div>
                </>)}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: (links.length + 3) * 0.05 }}
              >
                <Link to="/order" className="mt-8 text-center text-[0.7rem] font-bold uppercase tracking-[0.3em] bg-foreground text-background px-5 py-5 shadow-xl flex items-center justify-center gap-3">
                  <span>ORDER</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>CAKE</span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>)}
      </AnimatePresence>
    </header>);
};

