import { useState } from 'react'
import Home from './Pages/Home';
import Navbar from './Header/Navbar';

function App() {

  return (
    <div className="app">
        <Navbar/>
          <Home />
    </div>
  );
}

export default App
