
/* Type from Sanit.io - math-main-sanity */

import { PortableTextBlock } from "sanity"
import { Category } from "./Category"

export interface Movie {
    _id: string
    title: string
    previewImage: {
        asset: {
            _ref: string,
            _type: string
        }
    }
    author: string
    length: number
    fileId: string
    fileExpire?: string
    fileUrl?: string
    description: PortableTextBlock[]
    categories: Category[]
}