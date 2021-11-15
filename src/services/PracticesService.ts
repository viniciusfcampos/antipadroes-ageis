import { PracticeType } from '../types/PracticeType'
import { FirebaseService } from './FirebaseService'

export class PracticesService {
  static getPractices = async (): Promise<PracticeType[]> => {
    return await FirebaseService.get('practices')
  }

  static addPractice = async () => {
    return await FirebaseService.push('practices', { name: '' })
  }

  static updatePracticeName = async ({ id, name }) => {
    return await FirebaseService.update({ [`practices/${id}/name`]: name })
  }

  static removePractice = async ({ id }) => {
    return await FirebaseService.remove(`practices/${id}`)
  }
}
