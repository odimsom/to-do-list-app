export default interface Task {
  id: string
  title: string
  description: string
  isCompleted: boolean
  userId: string
  createdAt: Date
  updatedAt: Date
}
