import { User } from "./User";
export interface Feedback {
    id: string;
    user: User;
    userId: number;
    message: string;
    answers: FeedbackAnswer[];
    createdAt: Date;
    updatedAt: Date;
    hallo: string;
}
export interface FeedbackAnswer {
    message: string;
    createdAt: Date;
}
