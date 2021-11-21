import { TeamType } from '../types/TeamType'
import { FirebaseService } from './FirebaseService'

export class TeamsService {
  static getTeams = async (): Promise<TeamType[]> => {
    return await FirebaseService.get('teams')
  }

  static addTeam = async (team: TeamType) => {
    return await FirebaseService.push('teams', team)
  }
}
