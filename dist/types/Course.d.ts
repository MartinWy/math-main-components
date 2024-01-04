import { Organization } from "./Organization";
import { User } from "./User";
export type Course = {
    id: string;
    title: string;
    description: string;
    content: Object;
    userId: string;
    user?: User;
    active: boolean;
    organizationId: string;
    organization: Organization;
    courseParticipant: CourseParticipant[];
    createdAt: string;
    updatedAt: string;
};
export type CourseAnnouncement = {
    id: string;
    author: User;
    authorId: string;
    course: Course;
    courseId: string;
    message: string;
    CourseAnnouncementAsset: CourseAnnouncementAsset[];
    createdAt: Date;
};
export type CourseAnnouncementAssetType = "file" | "calculator" | "movie" | "material" | "ebook" | "test" | "link";
export type CourseAnnouncementAsset = {
    id?: string;
    type: CourseAnnouncementAssetType;
    link: string;
    text: string;
    file?: File;
    fileName?: string;
    fileType?: string;
    fileId?: string;
    fileExpire?: Date;
    fileSize?: number;
    createdAt?: Date;
};
export type CourseMessage = {
    id: string;
    author: User;
    authorId: string;
    course: Course;
    courseId: string;
    message: string;
    createdAt: Date;
    answerToMessage?: CourseMessage;
    answers: CourseMessage[];
};
export type CourseParticipant = {
    id: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    user?: User;
};
export type CoursePin = {
    id: string;
    subscriptionPin: string;
    amountOfUses: number;
    maxAmountOfUses: number;
    createdAt: Date;
    validUntil: Date;
};
