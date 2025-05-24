import { Suspense, lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

import { loadLogInPage } from '@/pages/public'

import Loader from '@/components/ui/loader'

// #region Config Imports
const LogInPage = lazy(loadLogInPage)

// #endregion Config Imports
// #region Config Routes
export const publicRoutes: RouteObject[] = [
  {
    index: true,
    element: (
      <Suspense fallback={<Loader />}>
        <LogInPage />
      </Suspense>
    ),
  },
]

// #endregion Config Routes
