import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import HeroSec from './Component/HeroSec';
// import HeroSec2 from './Component/HeroSec2';
// import HeroSec3 from './Component/HeroSec3';
// import HeroSec5 from './Component/HeroSec5';
// import HeroSec6 from './Component/HeroSec6';
// import HeroSec7 from './Component/HeroSec7';
// import HeroSec8 from './Component/HeroSec8';
import Footer from './Footer';
import Pulsarex from './Pulsarex';
import Pulsarex4 from './Pulsarex4';
import Roadmap from './Roadmap';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
    <Route path='/' element={<HeroSec />}/>
    <Route path='/presale' element={<Pulsarex />}/>
    <Route path='/staking' element={<Pulsarex4 />}/>
      </Routes>
      <Footer />
      <Roadmap />
      </BrowserRouter>

    </div>
  );
}

export default App;


