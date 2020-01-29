import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Odometer_counter from './components/Odometer';

function App() {
  return (
    <div className="App">
      < Header />
      < Odometer_counter />
      < Footer />
    </div>
  );
}

export default App;
