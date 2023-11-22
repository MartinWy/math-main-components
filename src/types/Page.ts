import { PortableTextBlock } from "sanity"


export interface Page {
    title: string
    slug: {
        current: string
    },
    content: PortableTextBlock[]
}