import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge"

export default withMiddlewareAuthRequired()

export const config = {
  matcher: [
    '/api/admin/characters/:id',
    '/api/admin/genders/:id',
    '/api/admin/species/:id',
    '/admin',
    '/admin/characters',
    '/admin/genders',
    '/admin/species'
  ]
}