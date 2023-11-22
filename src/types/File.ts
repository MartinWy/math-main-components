

export interface S3File {
    fileId: string
    updatedAt: Date
    title: string
    description: string
    category: S3FileCategory
}


export enum S3FileCategory {
    movies = 'movies',
    materials = 'materials',
    ebooks = 'ebooks',
    default = 'file'
}


