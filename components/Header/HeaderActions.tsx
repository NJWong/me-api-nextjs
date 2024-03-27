'use client'

const HeaderActions = () => {
  return (
    <div className="flex gap-3">
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>
    </div>
  )
}

export default HeaderActions