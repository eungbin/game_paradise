import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Team from './pages/Team';
import Union from './pages/Union';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/team' element={<Team />}></Route>
            <Route path='/union' element={<Union />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
