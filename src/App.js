import logo from './logo.svg';
import './App.css';
import Navbar from './comoponents/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from './comoponents/Footer/Footer';
import Spiner from './comoponents/Spiner/Spiner';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  const navigation = useNavigation();
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
    });
  }, []);
  if (navigation.state === 'loading') {
    return <Spiner></Spiner>;
  }
  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="min-h-[calc(100vh-160px)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
