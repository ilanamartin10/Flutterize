import logo from './logo.svg';
import './App.css';
import Login from "./Login.jsx"
import WebcamCapture from './WebcamCapture';
import Dashboard from './dashboard';
import Friend from './Friend';
import SecondDashboard from './SecondDashboard';
import { Navigate } from 'react-router-dom';
import {BrowserRouter,Routes, Route} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />}></Route>
    <Route path="/friend" element={<Friend />}></Route>
    <Route path="/cam" element={<WebcamCapture />}></Route>
    <Route path="/dash" element={<Dashboard />}></Route>
    <Route path="/next" element={<SecondDashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
