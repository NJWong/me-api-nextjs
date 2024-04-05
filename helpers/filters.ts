export function getCharacterFilterParams(searchParams: URLSearchParams) {
  const genderParam = searchParams.get('gender')
  const gender = genderParam ? parseInt(genderParam) : null

  const speciesParam = searchParams.get('species')
  const species = speciesParam ? parseInt(speciesParam) : null

  return { gender, species }
}