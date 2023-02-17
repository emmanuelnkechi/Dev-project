import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DashboardPage from "./pages/dashboardPage";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
