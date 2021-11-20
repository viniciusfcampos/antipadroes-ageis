import { TeamType } from '../types/TeamType'
import { FirebaseService } from './FirebaseService'

export class TeamsService {
  static getTeams = async (): Promise<TeamType[]> => {
    return await FirebaseService.get('teams')
  }
}
