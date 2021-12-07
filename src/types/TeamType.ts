import { AntipatternAnswerType } from './AntipatternAnswerType'

export type TeamType = {
  id: string
  name: string
  description: string
  size: number
  antipatterns?: AntipatternAnswerType[]
}
