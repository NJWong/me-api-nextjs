type RouteMeta = { params: { id: string }}

export async function GET(_: Request, meta: RouteMeta) {
  return Response.json({ message: `GET /api/characters/${meta.params.id}` })
}

export async function POST(_: Request, meta: RouteMeta) {
  return Response.json({ message: `POST /api/characters/${meta.params.id}` })
}

export async function PUT(_: Request, meta: RouteMeta) {
  return Response.json({ message: `PUT /api/characters/${meta.params.id}` })
}

export async function PATCH(_: Request, meta: RouteMeta) {
  return Response.json({ message: `PATCH /api/characters/${meta.params.id}` })
}

export async function DELETE(_: Request, meta: RouteMeta) {
  return Response.json({ message: `DELETE /api/characters/${meta.params.id}` })
}
