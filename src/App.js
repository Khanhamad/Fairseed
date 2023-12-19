import logo from './logo.svg';
import './App.css';
import HomePage from './pages';
import OnGoingCampaigns from './pages/Campaigns/OnGoingCampaigns';

function App() {
  return (
    <div className="container">
       <HomePage/>
       <OnGoingCampaigns/>
       </div>
  );
}

export default App;
