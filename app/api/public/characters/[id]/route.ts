type RouteMeta = { params: { id: string }}

export async function GET(_: Request, meta: RouteMeta) {
  return Response.json({ message: `GET /api/characters/${meta.params.id}` })
}
