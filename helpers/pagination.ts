export function getPaginationParams(searchParams: URLSearchParams) {
  const limitParam = searchParams.get('limit')
  const limit = limitParam !== null ? Math.min(parseInt(limitParam), 20) : 10

  const offsetParam = searchParams.get('offset')
  const offset = offsetParam !== null ? parseInt(offsetParam) : 0

  return { limit, offset }
}