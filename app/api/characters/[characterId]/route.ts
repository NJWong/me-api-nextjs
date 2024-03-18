export const dynamic = 'force-dynamic'

type PageParams = { params: { characterId: string }}

export async function GET(_: Request, { params: { characterId } }: PageParams) {
  return Response.json({ message: `GET /api/characters/${characterId}` })
}

export async function POST(_: Request, { params: { characterId } }: PageParams) {
  return Response.json({ message: `POST /api/characters/${characterId}` })
}

export async function PUT(_: Request, { params: { characterId } }: PageParams) {
  return Response.json({ message: `PUT /api/characters/${characterId}` })
}

export async function PATCH(_: Request, { params: { characterId } }: PageParams) {
  return Response.json({ message: `PATCH /api/characters/${characterId}` })
}

export async function DELETE(_: Request, { params: { characterId } }: PageParams) {
  return Response.json({ message: `DELETE /api/characters/${characterId}` })
}
