import { Course } from "./Course"
import { CourseAnnouncementAsset } from "./CourseAnnouncementAssset"
import { User } from "./User"


export interface CourseAnnouncement {
    id: string
    author: User
    authorId: string
    course: Course
    courseId: string
    message: string
    CourseAnnouncementAsset: CourseAnnouncementAsset[]
    createdAt: Date
}

