import { useState } from 'react';
import musicEvents from "../events";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const EventPage = () => {

    // Renders page based on pathname

    // Creates currentEvent const by finding an existing event path and matching it with current path
    const currentEvent = musicEvents.find(obj => {
        return `/${obj.path}` === window.location.pathname;
    })

    // Sets current image and sets length of images based on data
    const [currentImg, setcurrentImg] = useState(0);
    const length = currentEvent.images.length; 

    // Creates function in order for image carousel to function
    const nextImg = () => {
        setcurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
    }

    const prevImg = () => {
        setcurrentImg(currentImg  === 0 ? length - 1 : currentImg -1);
    }

    // Returns page based on event that is matched in data
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
                    <li key={Math.random()}>{opener}</li>
                ))}
                </ul>

                <h3>Suprise Guests:</h3>

                {/* Maps over guests for current Event */}
                <ul>
                    {currentEvent.guests.map((guest) => (
                        <li key={Math.random()}>{guest}</li>
                    ))}
                </ul>
            </div>

            <div id='img-cycle'>
                <div id='cycle'>

                    {/* Calls for function when clicked */}
                    <FaArrowLeft id="left-arrow" onClick={prevImg} />

                    {/* Creates div with image for each image in array that is sourced from data */}
                    {currentEvent.images.map((image, index) => (
                        <div className={index === currentImg ? 'slide active' : 'slide'} key={index}>
                            {console.log(image)}
                            {index === currentImg && (
                                <img src='../../public/images/IMG_0977.JPG' alt='Artist at concert' className='slide-img' />
                            )}
                        </div>

                    ))}     

                    {/* Calls for function when clicked */}
                    <FaArrowRight id="right-arrow" onClick={nextImg} />   
                </div>
            </div>
        </div>
    )
}

export default EventPage