export declare enum CourseAnnouncementAssetType {
    file = "file",
    calculator = "calculator",
    movie = "movie",
    material = "material",
    ebook = "ebook",
    test = "test",
    link = "link"
}
export interface CourseAnnouncementAsset {
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
}
