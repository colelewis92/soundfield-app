import './App.css';
import Footer from './Footer';
import Nav from './Nav';
import ThreeColumns from './ThreeColumns';

function App() {
  return (
    <div style={{justifyContent: 'space-between'}}>
      <Nav />
      <ThreeColumns />
      <Footer />
    </div>
  )
}

export default App;
