import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root.tsx'
import './index.css'
import Chapter1 from './pages/Chapter1.tsx'
import Chapter2_1 from './pages/Chapter2_1.tsx'
import Chapter2_2 from './pages/Chapter2_2.tsx'
import Chapter3 from './pages/Chapter3.tsx'
import Chapter4 from './pages/Chapter4.tsx'
import Chapter5 from './pages/Chapter5.tsx'

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
        path: 'chapters/3',
        element: <Chapter3 />,
      },
      {
        path: 'chapters/4',
        element: <Chapter4 />,
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
