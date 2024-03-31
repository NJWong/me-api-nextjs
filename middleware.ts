import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge"

export default withMiddlewareAuthRequired()

export const config = {
  matcher: [
    '/api/protected/characters',
    '/api/protected/characters/:id',
    '/api/protected/genders',
    '/api/protected/genders/:id',
    '/api/protected/species',
    '/api/protected/species/:id',
    '/admin',
    '/admin/characters',
    '/admin/genders',
    '/admin/species'
  ]
}