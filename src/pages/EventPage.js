import { useState } from 'react';
import musicEvents from "../events";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const EventPage = () => {

    // Renders page based on pathname

    // Creates currentEvent const by finding an existing event path and matching it with current path
    const currentEvent = musicEvents.find(obj => {
        return `/${obj.path}` === window.location.pathname;
    })

    const [currentImg, setcurrentImg] = useState(0);
    const length = currentEvent.images.length; 

    const nextImg = () => {
        setcurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
    }

    const prevImg = () => {
        setcurrentImg(currentImg  === 0 ? length - 1 : currentImg -1);
    }

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
                <div id='cycle'>
                    <FaArrowRight id="right-arrow" onClick={nextImg} />
                    <FaArrowLeft id="left-arrow" onClick={prevImg} />
                    {currentEvent.images.map((image) => (
                        <img src={image} alt='Artist at concert' />
                    ))}        
                </div>
            </div>
        </div>
    )
}

export default EventPage