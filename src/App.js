import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './style.css'

import Home from './pages/Home';
import EventPage from './pages/EventPage';
import musicEvents from './events';

function App() {


  return (
    <div className="App">

      <body>
        <nav id='header'>
          <a href="/" id='home-link'>
            <h1 id='page-title'>Concert Portfolio</h1>
          </a>
        </nav>

        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />

            {musicEvents.map((musicEvent) => {
              return <Route path={musicEvent.path} element={<EventPage />} />
            })}

          </Routes>
        </BrowserRouter>
      </body>

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
