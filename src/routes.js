import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import EventPage from './pages/EventPage';
import musicEvents from './events';

export default function Router() {
    const EventRoutes = [];

    // musicEvents.map((event) => {
    //     EventRoutes.push({ path: event.path, element: <EventPage />});
    // })

    let element = useRoutes([
        { index: true, element: <Home /> },

        // musicEvents.map((event) => {
        //     return { path: event.path, element: <EventPage /> }
        // }),

        // { path: '6lack', element: <EventPage /> }

        { path: 'travisscott1', element: <EventPage /> },
        { path: 'travisscott2', element: <EventPage /> }

    ]);

    console.log(element);
    return element;
}