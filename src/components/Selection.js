import React from 'react';
import { Link } from 'react-router-dom'

// Renders selection and creates element for each element
export default function Selection({ musicEvents }) {
    return (
        <div id='selection'>

          {/* Maps over each element and makes a tile for each item */}
          {musicEvents.map((musicEvent) => (

              <div key={Math.random()}>
                <Link to={`/${musicEvent.path}`}>
                  <div className="option">
                    <img src={musicEvent.thumbnail} id='selection-img' alt={musicEvent.name}></img>
        
                    <div className='img-info-overlay'>
                      <div className='img-title'>{musicEvent.name}</div>
                      <p className='img-desc'>{musicEvent.venue}</p>
                      <p className='img-date'>{musicEvent.date}</p>
                    </div>

                    <div className='img-info-sub'>
                      <p className='img-title'>{musicEvent.name}</p>
                      <p className='img-desc'>{musicEvent.venue}</p>
                      <p className='img-date'>{musicEvent.date}</p>
                    </div>
                  </div>
                </Link>
              </div>

          ))}
        </div>
    )
}