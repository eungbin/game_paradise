import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
