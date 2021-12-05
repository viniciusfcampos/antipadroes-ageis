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
      .filter(
        a => a.answer //=== a.antipattern.idealAnswer
      )
      .map((a, i) => ({
        ...a.antipattern,
        order: i + 1,
        status: Status.backlog
      }))

    await FirebaseService.update({
      [`teams/${team.id}/antipatterns`]: identifiedAntipatterns
    })

    return identifiedAntipatterns
  }
}
