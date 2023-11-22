import { Organization } from "./Organization"
import { User } from "./User"

export interface OrganizationMember {
    id: string
    role: string // "creator" OR "admin" OR "manager" OR "teacher" OR "student"
    createdAt: string
    updatedAt: string
    user: User
    userId: string
    organization: Organization
    organizationId: string
}