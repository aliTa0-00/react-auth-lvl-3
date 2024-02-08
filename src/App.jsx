import { Route, Routes } from "react-router-dom";
import "./App.css";
// import { Route, Routes } from "react-router-dom";
import Home from "./pages/website/Home";
import Signup from "./pages/website/Auth/Signup";
import Login from "./pages/website/Auth/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoutes from "./pages/website/Auth/ProtectedRoutes";
function App() {
  return (
    <div className={"App"}>
      {/* Routes حميع المسارات */}
      <Routes path="/" element={<Home />}>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />

        {/* خاص */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/Dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
