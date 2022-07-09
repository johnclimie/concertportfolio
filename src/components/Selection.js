import React from 'react';

export default function Selection({ musicEvents }) {
    return (
        <div id='selection'>

          {/* CSS Grid will go here, two items for each row. I want each item to animate one at a time when
          page is loaded. Each item will be a square picture. When hovered, the item will have a darker shade,
          and the name of the artist will load, along with the date of the concert, and maybe the venue name*/}

          {/* Maps over each element and makes a tile for each item */}
          {musicEvents.map((musicEvent) => (
              <a href={'/' + musicEvent.path}>
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
              </a>
          ))}
        </div>
    )
}