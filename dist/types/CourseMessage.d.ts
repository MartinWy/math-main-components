import { Course } from "./Course";
import { User } from "./User";
export interface CourseMessage {
    id: string;
    author: User;
    authorId: string;
    course: Course;
    courseId: string;
    message: string;
    createdAt: Date;
}
