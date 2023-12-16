import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import HomePage from './pages';
import Footer from './components/layout/Footer';
import { HomeMini } from '@mui/icons-material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
  const headerBackgroundImage = '../assets/sliderimage.jpg';
  return (
    <>
    <Navbar/>
    <HomePage/>
     
    </>
      
  );
}

export default App;
