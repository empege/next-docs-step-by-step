export async function GET(request: Request, { params }: any) {
  console.log('params: ', params)
  // ovo je ustvari params.params.slug, ali moze ovako {params} pa odmah .slug

  return Response.json(`SLUGIC JE UHVACEN: ${params.slug}`)
}
