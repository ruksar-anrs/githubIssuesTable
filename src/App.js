import './App.css';
import { Routes, Route } from "react-router-dom"
import LandingPage from './pages/issues/LandingPage';
import IssueDetailsPage from './pages/IssueDetailsPage';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="/issueId" element={ <IssueDetailsPage/> } />
       
      </Routes>
    </div>
  );
}

export default App;
