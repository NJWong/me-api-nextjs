import Link from 'next/link'

function HeaderLink ({ href, label }: { href: string, label: string}) {
  return (<Link className="hover:underline" href={href}>{label}</Link>)
}

export default function AdminHeader() {
  return (
    <header className="flex px-6 py-4 gap-4 items-center">
      <HeaderLink href="/" label="ME-API" />
      <nav className="flex justify-between mr-auto">
        <ul className="flex gap-3">
          <li>
            <HeaderLink href="/admin" label="Home" />
          </li>
          <li>
            <HeaderLink href="/admin/characters" label="Characters" />
          </li>
          <li>
            <HeaderLink href="/admin/genders" label="Genders" />
          </li>
          <li>
            <HeaderLink href="/admin/species" label="Species" />
          </li>
        </ul>
      </nav>
      <Link href="/api/auth/logout" className="bg-emerald-500 px-3 py-1 rounded">Sign out</Link>
    </header>
  )
}