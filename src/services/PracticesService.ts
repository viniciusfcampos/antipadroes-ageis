import { PracticeType } from '../types/PracticeType'
import { FirebaseService } from './FirebaseService'

export class PracticesService {
  static getPractices = async (): Promise<PracticeType[]> => {
    return await FirebaseService.get('practices', ['antipatterns'])
  }

  static addPractice = async () => {
    return await FirebaseService.push('practices', {
      name: '',
      antipatterns: []
    })
  }

  static updatePracticeName = async ({ id, name }) => {
    return await FirebaseService.update({ [`practices/${id}/name`]: name })
  }

  static removePractice = async ({ id }) => {
    return await FirebaseService.remove(`practices/${id}`)
  }

  static addAntipattern = async ({ id }) => {
    return await FirebaseService.push(`practices/${id}/antipatterns`, {
      name: ''
    })
  }

  static removeAntipattern = async ({ id, antipatternId }) => {
    return await FirebaseService.remove(
      `practices/${id}/antipatterns/${antipatternId}`
    )
  }

  static updateAntipatternField = async ({
    id,
    antipatternId,
    field,
    value
  }) => {
    return await FirebaseService.update({
      [`practices/${id}/antipatterns/${antipatternId}/${field}`]: value
    })
  }
}
