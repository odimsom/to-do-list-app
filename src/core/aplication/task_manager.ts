import type Task from '../dominio/task'
import LocalStorageManager from '../utils/local_storage_manager'

export default class TaskManger {
  private LocalStorage: LocalStorageManager<Task>

  constructor() {
    this.LocalStorage = new LocalStorageManager<Task>()
  }

  createTask(task: Task) {
    return this.LocalStorage.save(`task_${task.id}`, task)
  }
  getTaskById(taskId: string) {
    return this.LocalStorage.load(`task_${taskId}`)
  }
  updateTask(task: Task) {
    return this.LocalStorage.update(`task_${task.id}`, task)
  }
  deleteTask(taskId: string) {
    return this.LocalStorage.delete(`task_${taskId}`)
  }
  completeTask(taskId: string) {
    const taskResult = this.getTaskById(taskId)
    if (taskResult.IsSuccess && taskResult.Data) {
      const task = taskResult.Data
      task.isCompleted = true
      return this.updateTask(task)
    } else {
      return taskResult as ReturnType<typeof this.updateTask>
    }
  }
}
