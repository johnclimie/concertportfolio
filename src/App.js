import { Routes, Route, Link } from 'react-router-dom';
import './style.css'
import Home from './pages/Home';
import EventPage from './pages/EventPage';
import musicEvents from './events';
function App() {

    // Returns Main application
  return (
    <div className="App">
        <>
            <nav id='header'>
            <Link to='/' style={{ textDecoration: 'none'}}>
              <div id='home-link'>
                 <h1 id='page-title'>Concert Portfolio</h1> 
              </div>
            </Link>
            </nav>


            <Routes>
              <Route exact path='/' element={<Home />} />
              {/* Maps over events from musicEvents object and creates a route based on each event */}
              {musicEvents.map((musicEvent) => {
              return <Route exact path={`/${musicEvent.path}`} element={<EventPage name={`${musicEvent.path}`}/>} key={Math.random()} />
              })}
            </Routes>
        </>

        <footer id='footer'>
        <h1>Created by John Climie</h1>
        <div id='footer-links'>
          <a href='https://github.com/johnclimie' target='_blank' rel="noreferrer">GitHub</a>
          <a href='https://www.linkedin.com/in/john-climie-a0856b21a/' target='_blank' rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
export default App;