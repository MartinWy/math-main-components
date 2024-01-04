import { PortableTextBlock } from "sanity"


export type StaticPage = {
    title: string
    slug: {
        current: string
    },
    content: PortableTextBlock[]
}