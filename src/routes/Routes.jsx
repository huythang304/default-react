import NotFound from '../pages/NotFound';
import Home from '../pages/Home';

// const Home = lazy(() => import('../pages/Home.jsx'));

const ThemeRoutes = [
    {
        path: "/",
        element: <Home />,
        // children: [
        //   {
        //     path: "messages",
        //     element: <DashboardMessages />,
        //   },
        //   { path: "tasks", element: <DashboardTasks /> },
        // ],
    },
    { path: "*", element: <NotFound /> },
]

export default ThemeRoutes