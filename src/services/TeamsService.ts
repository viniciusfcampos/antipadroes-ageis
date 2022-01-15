import { TeamType } from '../types/TeamType'
import { UserType } from '../types/UserType'
import { FirebaseService } from './FirebaseService'

export class TeamsService {
  static getTeams = async (user: UserType): Promise<TeamType[]> => {
    return await FirebaseService.get('teams', ['antipatterns']).then(r => {
      if (user.isAdmin) return r
      return r.filter(t => t.userId === user.id)
    })
  }

  static getTeam = async (teamId: string): Promise<TeamType> => {
    return await FirebaseService.getById(`teams/${teamId}`, ['antipatterns'])
  }

  static addTeam = async (team: TeamType) => {
    return await FirebaseService.push('teams', team)
  }

  static removeTeam = async (teamId: string) => {
    return await FirebaseService.remove(`teams/${teamId}`)
  }
}
