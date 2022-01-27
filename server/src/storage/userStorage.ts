import { User } from '../../../types'

export default class UserStorage {
  private users: User[] = [
    {
      id: 1,
      nickname: 'Nikita',
    },
    {
      id: 2,
      nickname: 'Vladyslav',
    },
    {
      id: 3,
      nickname: 'Bartek',
    },
    {
      id: 4,
      nickname: 'Hanna',
    },
  ]

  private getNextId = () => this.users.length + 1

  addUser (nickname: string): User {
    const id = this.getNextId()

    this.users.push({ id, nickname })

    return (this.getUser(id) as User)
  }

  getUser (id: number): User | null {
    const user = this.users.find(user => user.id === id)

    return user || null
  }

  getUsers (): User[] {
    return this.users
  }
}
