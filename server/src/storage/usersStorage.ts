import { User } from '../../../types'

export default class UsersStorage {
  private users: User[] = []
  private getNextUserId = () => this.users.length + 1

  addUser (nickname: string): User {
    const id = this.getNextUserId()

    this.users.push({ id, nickname })

    return (this.getUser(id) as User)
  }

  getUser (id: number): User | null {
    const user = this.users.find(user => user.id === id)

    return user || null
  }
}
