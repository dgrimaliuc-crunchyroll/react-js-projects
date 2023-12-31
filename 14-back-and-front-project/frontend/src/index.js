import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage, { eventsLoader } from './pages/EventsPage';
import EventDetailPage, {
  deleteEventAction,
  eventLoader,
} from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import NavigationRouter from './pages/NavigationRouter';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/index';
import EventsNavigationRouter from './pages/EventsNavigationRouter';
import ErrorPage from './pages/ErrorPage';
import { submitEventAction } from './components/EventForm';
import NewsletterPage, { newsAction } from './pages/NewsletterPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavigationRouter />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsNavigationRouter />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail', // prefetching
            loader: eventLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: submitEventAction,
              },
            ],
          },
          { path: 'new', element: <NewEventPage />, action: submitEventAction },
        ],
      },
      { path: 'newsletter', element: <NewsletterPage />, action: newsAction },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
