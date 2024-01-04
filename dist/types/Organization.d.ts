import { User } from "./User";
export type Organization = {
    id: string;
    name: string;
    website: string;
    place: string;
    addressLine1: string;
    addressLine2: string;
    postcode: string;
    state: string;
    country: string;
    level: string;
    iconId: string;
    iconUrl: string;
    iconExpire: Date;
};
export type OrganizationMember = {
    id: string;
    role: OrganizationRole;
    createdAt: string;
    updatedAt: string;
    user: User;
    userId: string;
    organization: Organization;
    organizationId: string;
};
export type OrganizationRole = "creator" | "admin" | "manager" | "teacher" | "student";
