import { type LoaderFunction } from 'react-router-dom'

export const loggerMiddleware: LoaderFunction = async (args, context) => {
  console.log({ args, context })
  // Auth and i18n stuff here
  // you can return redirect
  return null
}
