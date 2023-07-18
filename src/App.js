import './App.css';
import Home from './components/Home/Home';
import Dashboard from './components/UserDashboard/Dashboard';
import Login from './components/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GoToTop from './components/GoToTop/GoToTop';
import FindMate from './components/FindMate/FindMate';
// import Portfolio from './portfolio-gen-frontend';
// import Portfolio from './components/portfolio-gen-frontend/index.html'
// import SkillMatching from 'C://Users//Vasu Arora//Desktop//TechInnovate//connectify//src//components//SkillMatching'

function App() {
  return (
    <>
      <GoToTop/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/signin" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path='/FindMate' element={<FindMate />} />
            {/* <Route path='/Portfolio' element={<Portfolio />} /> */}
          </Routes>
        </BrowserRouter>
 
    </>
  );
}

export default App;
