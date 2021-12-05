import { AntipatternType } from './AntipatternType'
import { PracticeType } from './PracticeType'

export type AntipatternAnswerType = {
  practice: PracticeType
  antipattern: AntipatternType
  answer?: boolean
}
