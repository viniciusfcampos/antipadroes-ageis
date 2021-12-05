import { AntipatternAnswerType } from '../types/AntipatternAnswerType'
import { AntipatternType } from '../types/AntipatternType'
import { TeamType } from '../types/TeamType'
import { Status } from '../utils/enums/Status'
import { FirebaseService } from './FirebaseService'

export class DiagnosticService {
  static createDiagnostic = async (
    team: TeamType,
    answers: AntipatternAnswerType[]
  ): Promise<AntipatternType[]> => {
    const identifiedAntipatterns = answers
      .filter(a => a.answer.toString() !== a.idealAnswer)
      .map((a, i) => ({
        ...a,
        practice: { id: a.practice.id, name: a.practice.name },
        order: i + 1,
        status: Status.backlog
      }))

    await FirebaseService.update({
      [`teams/${team.id}/antipatterns`]: identifiedAntipatterns
    })

    return identifiedAntipatterns
  }
}
