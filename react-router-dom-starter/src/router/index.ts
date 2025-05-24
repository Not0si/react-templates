import { createBrowserRouter } from 'react-router-dom'

import ErrorHandler from './error-handler'
import { loggerMiddleware } from './middleware'
import { privateRoutes } from './routes-private'
import { publicRoutes } from './routes-public'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      loader: loggerMiddleware,
      children: [...privateRoutes, ...publicRoutes],
      ErrorBoundary: ErrorHandler,
    },
  ],
  {
    future: {
      // Normalize `useNavigation()`/`useFetcher()` `formMethod` to uppercase
      v7_normalizeFormMethod: true,
      // Add other flags if needed
    },
  },
)
