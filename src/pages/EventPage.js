import musicEvents from "../events"

const EventPage = () => {

    const currentEvent = musicEvents.find(obj => {
        return `/${obj.path}` === window.location.pathname;
    })

    return (
        <div id='event-container'>
            <div id='event-info'>
                <h1>{currentEvent.name}</h1>

                <h3>{currentEvent.date} | {currentEvent.venue}</h3>

                <h3>{currentEvent.description}</h3>

                <h3>Opening Acts:</h3>

                <ul>
                {currentEvent.openers.map((opener) => (
                    <li>{opener}</li>
                ))}
                </ul>

                <h3>Suprise Guests:</h3>

                <ul>
                    {currentEvent.guests.map((guest) => (
                        <li>{guest}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default EventPage