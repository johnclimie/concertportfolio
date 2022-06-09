import './style.css'

import Selection from './components/Selection';

import musicEvents from './events';

function App() {
  return (
    <div className="App">
      <nav id='header'>
        <a href="/" id='home-link'>
          <h1 id='page-title'>Concert Portfolio</h1>
        </a>
      </nav>


      <section id='welcome'>
        <div id='about'>
          <h1 id='welcome-title'>Welcome To My Concert Photo Portfolio </h1>
          
          <div id='welcome-content'>
            <h2>Over the years, I have been to several different concerts, and seen several different artists.</h2>

            <h2>In fact, I have</h2>

            <ul>
              <li>Been to 6 concerts, 1 Sunday Service and 1 festival</li>
              <li>Seen 34 different artists</li>
              <li>Visited 4 different venues</li>
              <li>Taken dozens of amazing photos</li>
            </ul>

            <h2>Therefore, I have created this website, which can help showcase the moments I've captured during these musical events.</h2>

            <h2>Here, you can select a concert I've been to, and view the several different photos I've taken during the event.</h2>
          </div>
        </div>
        
        <Selection musicEvents={musicEvents}/>
        
      </section>

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
