import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import IndexPage from './components/IndexPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<IndexPage/>} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes> 
  );
}

export default App;
