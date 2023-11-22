

export enum CourseAnnouncementAssetType {
    file = "file", // Public File link (cloudflare.com r2 bucket: 'course-assets')
    calculator = "calculator", // Calculator id (sanity.io)
    video = "video", // Video id (mongodb)
    material = "material", // Material id (mongodb)
    ebook = "ebook", // Ebook id (mongodb)
    test = "test", // Test id (mongodb)
    link = "link" // simple external link url
}

export interface CourseAnnouncementAsset {
    id?: string
    type: CourseAnnouncementAssetType
    link: string
    text: string
    file?: File
    fileName?: string
    fileType?: string
    fileId?: string
    fileExpire?: Date
    fileSize?: number
}