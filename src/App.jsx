import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Workflows from "./pages/Workflows";
import CreateWorkflow from "./pages/CreateWorkflow";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Billing from "./pages/Billing";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/product" element={<Product />} />

      <Route path="/pricing" element={<Pricing />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
    path="/dashboard"
    element={
        <ProtectedRoute>
            <Dashboard />
        </ProtectedRoute>
    }
/> 
      <Route
        path="/workflows"
        element={
          <ProtectedRoute>
            <Workflows />
          </ProtectedRoute>
        }
      />
      <Route
    path="/create-workflow"
    element={
        <ProtectedRoute>
            <CreateWorkflow />
        </ProtectedRoute>
    }
/>
<Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />

<Route path="/settings" element={<ProtectedRoute><Settings/></ProtectedRoute>} />

<Route path="/billing" element={<ProtectedRoute><Billing/></ProtectedRoute>} />
    </Routes>
  );
}

export default App;