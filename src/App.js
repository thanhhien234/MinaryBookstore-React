import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Header from './components/Header';
import DetailBook from './routes/DetailBook';
import CreateBook from './routes/CreateBook';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detail-book/:bookId' element={<DetailBook />} />
        <Route path='/create-book/:option' element={<CreateBook/>} />
      </Routes>    
    </div>
  );
}
export default App;
