import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

import NotFound from '@/pages/errors/not-found'

export default function ErrorHandler() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return <NotFound />
      default:
        return <div>Error: {error.statusText}</div>
    }
  }

  return <div>Unexpected error</div>
}
