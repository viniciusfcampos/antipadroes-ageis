import { ref, push, get, update, remove } from '@firebase/database'
import database from '../utils/firebase'

export class FirebaseService {
  private static getListWithId = data =>
    Object.keys(data || {}).map(key => ({ id: key, ...data[key] }))

  static get = async (route: string, listProperties = []) => {
    const result = await get(ref(database, route))

    const data = result.val() || {}

    const list = Object.keys(data).map(key => ({ id: key, ...data[key] }))

    list.forEach(i => {
      listProperties.forEach(p => {
        i[p] = this.getListWithId(i[p])
      })
    })

    return list
  }

  static push = (route: string, body: any): string => {
    return push(ref(database, route), body).key
  }

  static update = (body: any) => {
    update(ref(database), body)
  }

  static remove = async (route: string) => {
    await remove(ref(database, route))
  }
}
