import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom';

import './style.css'

import Home from './pages/Home';
import EventPage from './pages/EventPage';
import musicEvents from './events';

function App() {

  const EventRoutes = [];  

  musicEvents.map((event) => {
    // console.log(event);
    EventRoutes.push({ path: event.path, element: <EventPage />});
  })

  console.log(EventRoutes);

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

            {/* <Route path='test' element={<EventPage />} /> */}
            {/* {useRoutes(EventRoutes)} */}
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
