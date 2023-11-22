import { Course } from "./Course"
import { CourseAnnouncementAsset } from "./CourseAnnouncementAsset"
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

