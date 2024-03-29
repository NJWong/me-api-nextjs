type RouteMeta = { params: { id: string }}

export async function GET(_: Request, meta: RouteMeta) {
  return Response.json({ message: `GET /api/species/${meta.params.id}` })
}

export async function POST(_: Request, meta: RouteMeta) {
  return Response.json({ message: `POST /api/species/${meta.params.id}` })
}

export async function PUT(_: Request, meta: RouteMeta) {
  return Response.json({ message: `PUT /api/species/${meta.params.id}` })
}

export async function PATCH(_: Request, meta: RouteMeta) {
  return Response.json({ message: `PATCH /api/species/${meta.params.id}` })
}

export async function DELETE(_: Request, meta: RouteMeta) {
  return Response.json({ message: `DELETE /api/species/${meta.params.id}` })
}
