import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword
} from 'firebase/auth'

export class UserService {
  static signIn = (email, password) => {
    const auth = getAuth()

    return signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        return user
      })
      .catch(error => {
        const mesages = {
          'auth/invalid-email': 'Email inválido.',
          'auth/weak-password': 'A senha deve ter ao menos 6 caracteres.'
        }

        const { code } = error

        const message = mesages[code] || 'Usuário ou senha inválidos.'

        throw new Error(message)
      })
  }

  static signUp = (email, password) => {
    const auth = getAuth()

    return createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        return user
      })
      .catch(error => {
        const mesages = {
          'auth/invalid-email': 'Email inválido.',
          'auth/weak-password': 'A senha deve ter ao menos 6 caracteres.',
          'auth/email-already-in-use':
            'Já existe um usuário com este email. Realize o login.'
        }
        const { code } = error
        console.log(code)

        const message = mesages[code] || 'Usuário ou senha inválidos.'

        throw new Error(message)
      })
  }
}
