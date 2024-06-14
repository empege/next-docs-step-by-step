export async function GET(request: Request, { params }: any) {
  return Response.json(`get`)
}

export async function POST(request: Request, { params }: any) {
  const formData = await request.formData()
  const name = formData.get('name')
  const message = formData.get('message')
  return Response.json({ name, message })
}
