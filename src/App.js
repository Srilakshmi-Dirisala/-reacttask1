import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Index'
import Footer from './Components/Footer/Index';
import Heroarea from './Components/Heroarea/Index';
import Floatingarea from './Components/Floatingarea/Index';
import Teambgarea from './Components/Teambgarea/index';
import Gamesection from './Components/Gamesection';
import Nftcollection from './Components/Nftcollection';
import Fansnft from './Components/Fansnft';
import Playernft from './Components/Playernft';
import Stadium from './Components/Stadium';
import Football from './Components/Football';
import Tokenomics from './Components/Tokenomics';
import Wfntoken from './Components/Wfntoken';




function App() {
  return (
    <div>
      
     <Header/>
         
    <Heroarea/>
   <Floatingarea/>
    <Teambgarea/>
  <Gamesection/>
  <Nftcollection/>
  <Fansnft/>
  <Playernft/>
  <Stadium/>
  <Football/>
  
  <Tokenomics/>
  <Wfntoken/>
     <Footer/>

    </div>
  );
}

export default App;
