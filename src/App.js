import {BrowserRouter as Router,Route,Routes}from 'react-router-dom'
import './App.css';
// import A from './Components/comp';
import Home from './Components/home';
import Bookmark from './Components/bookmark';

function App() {
  return (
    <div className="App">
      {/* <A/> */}
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/bookmark' element={<Bookmark/>}/>
        </Routes>
      </Router>
    {/* <Home/> */}
    </div>
  );
}

export default App;
