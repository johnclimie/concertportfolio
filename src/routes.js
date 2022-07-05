import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
// import EventPage from './pages/EventPage';
// import musicEvents from './events';

export default function Router() {


    let element = useRoutes([
        { index: true, element: <Home /> },



    ]);

    return element;
}