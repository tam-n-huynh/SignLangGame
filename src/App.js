
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from "./Pages/Home/Home.js"
import Learn from "./Pages/Learn/Learn.js"
import Quiz from "./Pages/Quiz/Quiz.js"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/learn" element={ <Learn />}/>
        <Route path="/quiz" element={ <Quiz /> } />
      </Routes>
    </Router>
  );
}

export default App;
