import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root.tsx'
import './index.css'
import Chapter1 from './pages/Chapter1.tsx'
import Chapter2 from './pages/Chapter2.tsx'
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
        path: 'chapters/2',
        element: <Chapter2 />,
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
