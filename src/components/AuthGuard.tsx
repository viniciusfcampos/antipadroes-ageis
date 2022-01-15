import { useRouter } from 'next/router'
import { ReactNode, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'

const AuthGuard = ({ children, auth }) => {
  if (!auth) return children

  const { authenticated, loading, user } = useAuth()

  const router = useRouter()

  const hasPermission = user => {
    if (auth === 'AUTHENTICATED') return !!user

    if (auth === 'ADMIN') return user?.email === 'admin@ufmg.br'
  }

  useEffect(() => {
    if (!loading && !hasPermission(user)) router.push('/')
  }, [authenticated, loading, user])

  if (!loading && hasPermission(user)) return children

  else return null
}

export default AuthGuard
