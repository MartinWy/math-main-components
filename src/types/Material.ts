import { Category } from "./Category";


/* Type from Sanit.io - math-main-sanity */

export type Material = {
    _id: string
    title: string,
    fileId: string,
    fileExpire?: string,
    fileUrl?: string,
    fileType: string,
    fileCategory: string,
    shortDescription: string,
    description: string,
    previewImage: {
        asset: {
            _ref: string,
            _type: string
        }
    }
    categories: Category[]
}