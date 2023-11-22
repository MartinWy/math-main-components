import { Category } from "./Category";



export interface Material {
    _id: string
    title: string,
    fileId: string,
    fileExpire?: string,
    fileUrl?: string,
    fileType: string,
    description: string,
    previewImage: {
        asset: {
            _ref: string,
            _type: string
        }
    }
    categories: Category[]
}