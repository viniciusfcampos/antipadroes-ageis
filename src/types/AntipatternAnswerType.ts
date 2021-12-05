import { Status } from '../utils/enums/Status'
import { AntipatternType } from './AntipatternType'
import { PracticeType } from './PracticeType'

export type AntipatternAnswerType = AntipatternType & {
  practice: PracticeType
  answer?: boolean
  useful?: boolean
  order?: number
  status?: Status
}
