import { Suspense, lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

import { loadDashboardPage } from '@/pages/private'

import DashboardLayout from '@/components/layouts/dashboard-layout'
import Loader from '@/components/ui/loader'

// #region Config Imports
const DashboardPage = lazy(loadDashboardPage)

// #endregion Config Imports
// #region Config Routes
export const privateRoutes: RouteObject[] = [
  {
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard',
        element: (
          <Suspense fallback={<Loader />}>
            <DashboardPage />
          </Suspense>
        ),
      },
    ],
  },
]

// #endregion Config Routes
