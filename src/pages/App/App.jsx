import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewPcPage from '../NewPcPage/NewPcPage';
import PcIndexPage from '../PcIndexPage/PcIndexPage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import PcDetailPage from '../PcDetailPage/PcDetailPage';


export default function App() {
  const [user, setUser] = useState(getUser());


  return (
    <main className="App">
    { user ?
      <>
      <NavBar setUser ={setUser} user = {user}></NavBar>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/pcs/new" element={<NewPcPage />} />
        <Route path="/pcs" element={<PcIndexPage />} />
        <Route path="/pcs/:pcId" element={<PcDetailPage />} />
      </Routes>
      </>
      :
      <AuthPage setUser={setUser}/>
    }
  </main>
  );
}


