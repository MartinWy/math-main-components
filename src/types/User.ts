import { Course } from "./Course"
import { Organization } from "./Organization"



export interface User {
    id: string
    email: string
    username: string
    firstName: string
    lastName: string
    newsletterEnabled: boolean
    initialPassword: string
    isPasswordEnabled: boolean
    emailVerified: boolean
    profileImageUrl: string
    settings: Object
    role: string
    courses: Course[]
    appNotifications: Object
    emailNotifications: Object
    stripeCustomerId: string
    createdAt: string
    updatedAt: string
    organization: Organization
    organizationId: string
    organizationRole: string
}