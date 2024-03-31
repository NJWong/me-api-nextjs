type RouteMeta = { params: { id: string }}

export async function PUT(_: Request, meta: RouteMeta) {
  return Response.json({ message: `PUT /api/genders/${meta.params.id}` })
}

export async function PATCH(_: Request, meta: RouteMeta) {
  return Response.json({ message: `PATCH /api/genders/${meta.params.id}` })
}

export async function DELETE(_: Request, meta: RouteMeta) {
  return Response.json({ message: `DELETE /api/genders/${meta.params.id}` })
}
