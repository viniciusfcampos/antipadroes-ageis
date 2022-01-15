import { useRouter } from 'next/router'
import React, {
  createContext,
  useContext,
  useEffect, useState
} from 'react'
import { UserService } from '../services/UserService'
import { initializeFirebase } from '../utils/firebase'

const AuthContext = createContext({
  authenticated: false,
  adminAuthenticated: false,
  user: null,
  loading: true,
  signIn: async (email: string, password: string) => { },
  signUp: async (email: string, password: string) => { },
  signOut: async () => { }
})

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const [loading, setLoading] = useState(true)

  const router = useRouter()

  useEffect(() => {
    initializeFirebase()
    setUser(getUser())
    setLoading(false)
  }, [])

  const getUser = () => JSON.parse(localStorage.getItem('user'))

  const saveUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
    setUser(user)
  }

  const signIn = async (email, password) => UserService
    .signIn(email, password)
    .then((user) => saveUser(user))

  const signUp = async (email, password) => UserService
    .signUp(email, password)
    .then((user) => saveUser(user))

  const signOut = async () => {
    localStorage.setItem('user', JSON.stringify(null))
    setUser(null)
    router.push('/')
  }

  const context = {
    authenticated: !!user,
    adminAuthenticated: user && user.email === 'admin@ufmg.br',
    user,
    loading,
    signIn,
    signUp,
    signOut
  }

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}

export default AuthProvider
