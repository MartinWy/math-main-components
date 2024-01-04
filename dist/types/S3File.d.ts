export type S3File = {
    fileId: string;
    updatedAt: Date;
    title: string;
    description: string;
    category: S3FileCategory;
};
export type S3FileCategory = 'movies' | 'materials' | 'ebooks' | 'file';
