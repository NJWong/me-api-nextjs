'use client'

import { useUser } from "@auth0/nextjs-auth0/client"

const HeaderActions = () => {
  const { user, isLoading } = useUser()

  return (
    <div className="flex gap-3">
      { !isLoading && user && (
        <>
          <span>{ user.name }</span>
          <a href="/api/auth/logout">Logout</a>
        </>
      )}
      { !isLoading && !user && (
        <a href="/api/auth/login">Login</a>
      )}
    </div>
  )
}

export default HeaderActions