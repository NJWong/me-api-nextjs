import Link from 'next/link'

function HeaderLink ({ href, label }: { href: string, label: string}) {
  return (<Link className="hover:underline" href={href}>{label}</Link>)
}

export default function AdminHeader() {
  return (
    <nav className="flex justify-between px-6 py-4">
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
      <HeaderLink href="/api/auth/logout" label="Logout" />
    </nav>
  )
}