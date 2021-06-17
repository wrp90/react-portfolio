import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header'
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import background from './assets/imgs/backgroundimg.jpg'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={Home} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/contact' component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
