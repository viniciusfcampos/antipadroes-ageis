import { Status } from '../utils/enums/Status'

export type AntipatternType = {
  id: string
  name: string
  description: string
  identificationStrategy: string
  eliminationStrategy: string
  idealAnswer?: boolean
  useful?: boolean
  order?: number
  status?: Status
}
