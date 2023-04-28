import './App.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Bio from './components/Bio';
import Packages from './components/Packages';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App lg:p-4 bg-black text-white relative sm:p-0">
      <Navbar />
      <Header />
      <Bio />
      <Packages />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
