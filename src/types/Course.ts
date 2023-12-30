import { CourseParticipant } from "./CourseParticipant"
import { Organization } from "./Organization"
import { User } from "./User"



export interface Course {
    id: string
    title: string
    description: string
    content: Object
    userId: string,
    user?: User,
    active: boolean,
    organizationId: string
    organization: Organization
    courseParticipant: CourseParticipant[]
    createdAt: string
    updatedAt: string
}