import { Organization } from "./Organization";
import { User } from "./User";
export interface OrganizationMember {
    id: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    user: User;
    userId: string;
    organization: Organization;
    organizationId: string;
}
