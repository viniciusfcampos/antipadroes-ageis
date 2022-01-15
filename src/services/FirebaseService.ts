import { ref, push, get, update, remove } from '@firebase/database'
import { getDatabase } from '../utils/firebase'

export class FirebaseService {
  private static getListWithId = data =>
    Object.keys(data || {}).map(key => ({ id: key, ...data[key] }))

  static get = async (route: string, listProperties = []) => {
    const result = await get(ref(getDatabase(), route))

    const data = result.val() || {}

    const list = Object.keys(data).map(key => ({ id: key, ...data[key] }))

    list.forEach(i => {
      listProperties.forEach(p => {
        i[p] = this.getListWithId(i[p])
      })
    })

    return list
  }

  static getById = async (route: string, listProperties = []) => {
    const result = await get(ref(getDatabase(), route))

    const data = result.val() || {}

    listProperties.forEach(p => {
      data[p] = this.getListWithId(data[p])
    })

    return data
  }

  static push = (route: string, body: any): string => {
    return push(ref(getDatabase(), route), body).key
  }

  static update = (body: any) => {
    update(ref(getDatabase()), body)
  }

  static remove = async (route: string) => {
    await remove(ref(getDatabase(), route))
  }
}
