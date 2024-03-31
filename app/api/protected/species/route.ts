export async function POST(_: Request) {
  return Response.json({ message: `POST /api/species/${meta.params.id}` })
}