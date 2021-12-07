import { TeamType } from '../types/TeamType'
import { FirebaseService } from './FirebaseService'

export class TeamsService {
  static getTeams = async (): Promise<TeamType[]> => {
    return await FirebaseService.get('teams', ['antipatterns'])
  }

  static getTeam = async (teamId: string): Promise<TeamType> => {
    return await FirebaseService.getById(`teams/${teamId}`, ['antipatterns'])
  }

  static addTeam = async (team: TeamType) => {
    return await FirebaseService.push('teams', team)
  }
}
