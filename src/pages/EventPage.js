import musicEvents from "../events"

const EventPage = () => {

    const currentEvent = musicEvents.find(obj => {
        return obj.name === '6lack';
    })

    console.log(currentEvent);
    return (
        <h1>test</h1>
    )
}

export default EventPage