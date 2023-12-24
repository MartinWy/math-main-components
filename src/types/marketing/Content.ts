import { PortableTextBlock } from "sanity"


/* Type from Sanit.io - math-main-sanity */

export interface Content {
    _id: string
    priority: number
    title: string
    subtitle: string
    iconName: string
    description: PortableTextBlock[]
    isComingSoon: boolean
    contentBuckets: Array<ContentBucket>
}

export interface ContentBucket {
    title: string
    description: string
    bucket: string
    image?: {
        asset: {
            _ref: string,
            _type: string
        }
    }
}