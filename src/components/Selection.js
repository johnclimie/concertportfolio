import React from 'react';

export default function Selection({ musicEvents }) {
    return (
        <div id='selection'>
          {/* <h1>selection</h1> */}

          {/* CSS Grid will go here, two items for each row. I want each item to animate one at a time when
          page is loaded. Each item will be a square picture. When hovered, the item will have a darker shade,
          and the name of the artist will load, along with the date of the concert, and maybe the venue name*/}

          {musicEvents.map((musicEvent) => (
              <div id="one">
              <img src={musicEvent.thumbnail} id='selection-img' alt={musicEvent.name}></img>
  
              <div class='img-info'>
                <div class='img-title'>{musicEvent.name}</div>
                <p class='img-desc'>{musicEvent.venue}</p>
              </div>
            </div>
          ))}
        </div>
    )
}