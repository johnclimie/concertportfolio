import musicEvents from "../events"

const EventPage = () => {

    const currentEvent = musicEvents.find(obj => {
        return obj.name === '6lack';
    })

    console.log(currentEvent);
    return (
        <div id='event-container'>
            <div id='event-info'>
                <h1>{currentEvent.name}</h1>

                <h3>{currentEvent.date} | {currentEvent.venue}</h3>

                <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum velit nisi, non dignissim diam rutrum et. Sed vehicula erat a varius aliquet. Ut dignissim purus id posuere euismod. Sed et justo gravida, gravida mauris eget, vestibulum erat. In condimentum ligula vitae magna luctus, vitae porttitor magna consectetur. Praesent dolor quam, mollis eu lacus a, accumsan interdum felis. Fusce a lectus tincidunt, interdum ante et, consequat leo. Curabitur facilisis viverra rhoncus. Donec rutrum ex non nunc fringilla cursus. Morbi sit amet interdum metus, in suscipit enim. Etiam pretium felis nibh, eu placerat odio malesuada nec. Sed nisi est, elementum id justo ac, viverra aliquam libero. Maecenas diam dolor, rhoncus vel tellus eu, euismod lobortis enim. Integer tristique iaculis aliquam. Duis lacinia libero a faucibus aliquam.
                </h3>

                <h3>Opening Acts: Sabrina Claudio</h3>

                <h3>Suprise Guests: YFN Lucci</h3>
            </div>
        </div>
    )
}

export default EventPage