import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import EventPage from './pages/EventPage';
import musicEvents from './events';

export default function Router() {
    // const EventRoutes = [];

    // musicEvents.map((event) => {
    //     EventRoutes.push({ path: event.path, element: <EventPage />});
    // })

    let element = useRoutes([
        { index: true, element: <Home /> },

        musicEvents.map((event) => {
            return { path: event.path, element: <EventPage /> }
        })
    ]);

    return element;
}