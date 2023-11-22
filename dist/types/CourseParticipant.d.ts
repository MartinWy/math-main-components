import { User } from "./User";
export interface CourseParticipant {
    id: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    user?: User;
}
