export type StateType = {
  type: 'edit' | 'delete' | null
  show: boolean
  id: number | string | null
}

export interface ExamType {
  id: number
  numOfQs: number
  duration: number
  startDate: string
  dueDate: string
}

export type formData = {
  numOfQs: number
  duration: number
  startDate: Date
  dueDate: Date
}

export type QuestionsType = {
  question: string
  choices: Array<string>
  correctAnswer: string
  id: string
}

export type ChoicesType = {
  [key: number | string]: { text: string; correctAnswer: boolean }
}

export type userType = {
  fullName: string
  username: string
  password: string
  role: 'admin' | 'student'
}

export type User = Omit<userType, 'password'>
