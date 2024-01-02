import "./App.css";
import AdminPage from "../src/pages/AdminPanel/AdminPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./components/layout/AdminLayout";

import AdminRoutes from "./pages/AdminPanel/AdminRoutes";
import Dashboard from "./components/AdminPanelPages/Dashboard/Dashboard";
function App() {
  return (
    <div >
      {/* <HomePage/> */}
      {/* <OnGoingCampaigns/> */}

      <BrowserRouter>
      <AdminPage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
