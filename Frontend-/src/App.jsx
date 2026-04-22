import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { PageEntrance } from "@/components/ui/Parallax";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Cakes from "./pages/Cakes.jsx";
import Menu from "./pages/Menu.jsx";
import Story from "./pages/Story.jsx";
import Visit from "./pages/Visit.jsx";
import Order from "./pages/Order.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Cart from "./pages/Cart.jsx";
import Profile from "./pages/Profile.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import NotFound from "./pages/NotFound.jsx";
import { ScrollToTop } from "./components/site/ScrollToTop.jsx";
const queryClient = new QueryClient();
const App = () => (<QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/cakes" element={<Cakes />}/>
              <Route path="/menu" element={<Menu />}/>
              <Route path="/story" element={<Story />}/>
              <Route path="/visit" element={<Visit />}/>
              <Route path="/order" element={<Order />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/signup" element={<Signup />}/>
              <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>}/>
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
              <Route path="*" element={<NotFound />}/>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>);
export default App;
