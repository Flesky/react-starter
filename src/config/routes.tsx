import type { RouteObject } from 'react-router'
import AppLayout from '../layouts/AppLayout.tsx'
import Index from '../pages'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <Index />,
      },
    ],
  },
]

export default routes
