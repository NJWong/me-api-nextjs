
export async function POST(req: Request) {
  const body = await req.json()

  return Response.json({ message: `POST /api/genders`, data: body })
}