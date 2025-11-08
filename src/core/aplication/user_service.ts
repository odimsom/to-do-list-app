import type OperationResult from '../dominio/common/operation_result'
import type User from '../dominio/user'
import LocalStorageManager from '../utils/local_storage_manager'

export default class UserService {
  private LocalStorage: LocalStorageManager<User>

  constructor() {
    this.LocalStorage = new LocalStorageManager<User>()
  }

  createUser(user: User) {
    user.id = this.generateId()
    return this.LocalStorage.save(`user_${user.id}`, user)
  }
  generateId(): string {
    return crypto.randomUUID()
  }

  getUserById(userId: string) {
    return this.LocalStorage.load(`user_${userId}`)
  }

  validateUserCredentials(email: string, password: string): OperationResult<User> {
    const users = this.LocalStorage.loadAll()
    const user = users.Data?.find((user) => user.email === email && user.passwordHash === password)
    if (user) {
      return { IsSuccess: true, Data: user, Message: 'User authenticated successfully' }
    } else {
      return {
        IsSuccess: false,
        Errors: ['Invalid email or password'],
        Message: 'Authentication failed',
      }
    }
  }

  updateUser(user: User) {
    return this.LocalStorage.update(`user_${user.id}`, user)
  }

  deleteUser(userId: string) {
    return this.LocalStorage.delete(`user_${userId}`)
  }
}
