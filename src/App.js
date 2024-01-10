import "./App.css";
import AdminPage from "../src/pages/AdminPanel/AdminPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/index'
import CreateCampaigns from "./pages/Campaigns/CreateCampaigns/Index";


function App() {
  return (
    <div >
      {/* <HomePage/> */}
      {/* <OnGoingCampaigns/> */}
      <CreateCampaigns/>

      {/* <BrowserRouter>
      <AdminPage/>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
