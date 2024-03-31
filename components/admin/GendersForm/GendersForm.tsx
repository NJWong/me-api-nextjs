'use client'

export default function GendersForm() {
  async function createGender(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)

    const name = formData.get('name')

    if (!name) {
      console.error('TODO handle no name')
      return
    }

    const response = await fetch('/api/protected/genders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    })
  }

  return (
    <form onSubmit={createGender} className="flex flex-col gap-2">
      <input name="name" placeholder="Name" className="bg-transparent border border-slate-300 rounded px-3 py-1" />
      <button type="submit" className="bg-emerald-400 rounded px-3 py-2">Create</button>
    </form>
  )
}