import logo from './logo.svg';
import {Routes, BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Home from './Page/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'  element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
