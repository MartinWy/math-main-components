import { CourseParticipant } from "./CourseParticipant"
import { Organization } from "./Organization"
import { User } from "./User"



export interface Course {
    id: string
    title: string
    content: Object
    userId: string,
    user?: User,
    organizationId: string
    organization: Organization
    courseParticipant: CourseParticipant[]
    createdAt: string
    updatedAt: string
}