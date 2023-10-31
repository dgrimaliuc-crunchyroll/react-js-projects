import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import NavigationRouter from './pages/NavigationRouter';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/index';
import EventsNavigationRouter from './pages/EventsNavigationRouter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavigationRouter />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/events',
        element: <EventsNavigationRouter />,
        children: [
          { index: true, element: <EventsPage /> },
          { path: '/events/:eventId', element: <EventDetailPage /> },
          { path: '/events/new', element: <NewEventPage /> },
          { path: '/events/:eventId/edit', element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
