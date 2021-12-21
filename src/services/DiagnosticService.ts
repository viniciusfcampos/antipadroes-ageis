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
      .filter(a => a.answer !== null && a.answer.toString() !== a.idealAnswer)
      .map(a => ({
        ...a,
        practice: { id: a.practice.id, name: a.practice.name },
        order: null,
        useful: a.useful != false,
        status: Status.backlog
      }))

    await FirebaseService.update({
      [`teams/${team.id}/antipatterns`]: identifiedAntipatterns
    })

    return identifiedAntipatterns
  }

  static updateDiagnostic = async (
    teamId: string,
    antipatterns: AntipatternAnswerType[]
  ): Promise<AntipatternType[]> => {
    await FirebaseService.update({
      [`teams/${teamId}/antipatterns`]: antipatterns
    })

    return antipatterns
  }
}
