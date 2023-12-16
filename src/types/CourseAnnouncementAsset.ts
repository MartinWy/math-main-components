

export enum CourseAnnouncementAssetType {
    file = "file", // Public File link (cloudflare.com r2 bucket: 'course-assets')
    calculator = "calculator", // Calculator id (sanity.io)
    movie = "movie", // Video id (sanity.io)
    material = "material", // Material id (sanity.io)
    ebook = "ebook", // Ebook id (sanity.io)

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
    createdAt: Date
}