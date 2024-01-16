import './App.css';


import Adduser from './components/Adduser';
import Navbar from './components/Navbar';
import CodeforInterview from './components/CodeforInterview';
import Allusers from './components/Allusers';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<CodeforInterview />}/>
        <Route path='/all' element={<Allusers />}/>
        <Route path='/add' element={<Adduser />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
