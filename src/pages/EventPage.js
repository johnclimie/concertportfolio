import { useState } from 'react';
import musicEvents from "../events";

const EventPage = () => {

    // Renders page based on pathname

    // Creates currentEvent const by finding an existing event path and matching it with current path
    const currentEvent = musicEvents.find(obj => {
        return `/${obj.path}` === window.location.pathname;
    })

    const length = currentEvent.images.length; 

    return (
        <div id='event-container'>
            <div id='event-info'>
                <h1>{currentEvent.name}</h1>

                <h3>{currentEvent.date} | {currentEvent.venue}</h3>

                <h3 id='event-desc'>{currentEvent.description}</h3>

                <h3>Opening Acts:</h3>

                {/* Maps over openers for current event */}
                <ul>
                {currentEvent.openers.map((opener) => (
                    <li>{opener}</li>
                ))}
                </ul>

                <h3>Suprise Guests:</h3>

                {/* Maps over guests for current Event */}
                <ul>
                    {currentEvent.guests.map((guest) => (
                        <li>{guest}</li>
                    ))}
                </ul>
            </div>

            <div id='img-cycle'>
                <h1>img cycle</h1>
                <div id='cycle'>
                    {currentEvent.images.map((image) => (
                        <img src={image} alt='Artist at concert' />
                    ))}        
                </div>
            </div>
        </div>
    )
}

export default EventPage