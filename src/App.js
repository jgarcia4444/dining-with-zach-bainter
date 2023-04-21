import './App.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Bio from './components/Bio';
import Packages from './components/Packages';

function App() {
  return (
    <div className="App p-8 bg-black text-white">
      <Navbar />
      <Header />
      <Bio />
      <Packages />
    </div>
  );
}

export default App;
