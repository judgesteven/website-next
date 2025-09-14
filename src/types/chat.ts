export interface Message {
  id: number
  text: string
  sender: 'user' | 'ai'
  timestamp: Date
}

export interface AccessForm {
  name: string
  email: string
  project: string
}
