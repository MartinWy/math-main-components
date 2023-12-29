import { User } from "./User";
export interface Feedback {
    id: string;
    user: User;
    userId: number;
    message: string;
    answers: object[];
    createdAt: Date;
    updatedAt: Date;
}
export interface FeedbackAnswer {
    message: string;
    createdAt: Date;
}
