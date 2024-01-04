import { User } from "./User"


export type Feedback = {
    id: string
    user: User
    userId: number
    message: string
    answers: FeedbackAnswer[]
    createdAt: Date
    updatedAt: Date
    hallo: string
}

export type FeedbackAnswer = {
    message: string
    createdAt: Date
}