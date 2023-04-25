import './App.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Bio from './components/Bio';
import Packages from './components/Packages';
import Services from './components/Services';

function App() {
  return (
    <div className="App p-8 bg-black text-white">
      <Navbar />
      <Header />
      <Bio />
      <Packages />
      <Services />
    </div>
  );
}

export default App;
