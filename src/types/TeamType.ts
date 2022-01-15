import { AntipatternAnswerType } from './AntipatternAnswerType'

export type TeamType = {
  id: string
  name: string
  description: string
  userId: string
  antipatterns?: AntipatternAnswerType[]
}
