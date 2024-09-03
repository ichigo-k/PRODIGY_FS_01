import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Welcome/>} />
      </Routes>
    </Router>
  );
}

export default App;
