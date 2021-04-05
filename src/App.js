import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import {BrowserRouter , Route} from 'react-router-dom';
import SearchePage from './SearchePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Route path="/search" component={SearchePage}/>
        <Route path="/" component={Home} /> 
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
