import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages";
import OnGoingCampaigns from "./pages/Campaigns/OnGoingCampaigns";
import Navbar from "./components/layout/AdminNavbar";
import AdminPage from "../src/pages/AdminPanel/AdminPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SideBar } from "./components/layout/sideBar";
import AdminLayout from "./components/layout/AdminLayout";

function App() {
  return (
    <div className="container">
      {/* <HomePage/> */}
      {/* <OnGoingCampaigns/> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AdminLayout>
                {" "}
                <AdminPage />
              </AdminLayout>
            }
          />

          <Route
            path="/donations"
            element={
              <AdminLayout>
                <h1>
                  HHHHHHHHHHHHHHHHHHHHHHEEEEEEEEEEEEEEEEELLLLLLLLLLLLLLLLLLLLLL
                </h1>
              </AdminLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
