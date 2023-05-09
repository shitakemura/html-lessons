import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root.tsx'
import './index.css'
import Chapter1 from './pages/Chapter1.tsx'
import Chapter2_1 from './pages/Chapter2_1.tsx'
import Chapter2_2 from './pages/Chapter2_2.tsx'
import Chapter2_Training from './pages/Chapter2_Training.tsx'
import Chapter3_1 from './pages/Chapter3_1.tsx'
import Chapter3_2 from './pages/Chapter3_2.tsx'
import Chapter3_Training from './pages/Chapter3_Training/Chapter3_Training.tsx'
import AboutUs from './pages/Chapter3_Training/AboutUs.tsx'
import Service from './pages/Chapter3_Training/Service.tsx'
import Works from './pages/Chapter3_Training/Works.tsx'
import Contact from './pages/Chapter3_Training/Contact.tsx'
import Chapter4_1 from './pages/Chapter4_1.tsx'
import Chapter5 from './pages/Chapter5.tsx'
import Chapter4_2 from './pages/Chapter4_2.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'chapters/1',
        element: <Chapter1 />,
      },
      {
        path: 'chapters/2_1',
        element: <Chapter2_1 />,
      },
      {
        path: 'chapters/2_2',
        element: <Chapter2_2 />,
      },
      {
        path: 'chapters/2_Training',
        element: <Chapter2_Training />,
      },
      {
        path: 'chapters/3_1',
        element: <Chapter3_1 />,
      },
      {
        path: 'chapters/3_2',
        element: <Chapter3_2 />,
      },
      {
        path: 'chapters/3_Training',
        element: <Chapter3_Training />,
        children: [
          {
            path: 'about-us',
            element: <AboutUs />,
          },
          {
            path: 'service',
            element: <Service />,
          },
          {
            path: 'works',
            element: <Works />,
          },
          {
            path: 'contact',
            element: <Contact />,
          },
        ],
      },
      {
        path: 'chapters/4_1',
        element: <Chapter4_1 />,
      },
      {
        path: 'chapters/4_2',
        element: <Chapter4_2 />,
      },
      {
        path: 'chapters/5',
        element: <Chapter5 />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
