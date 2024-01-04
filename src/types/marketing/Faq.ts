

/* Type from Sanit.io - math-main-sanity */

import { PortableTextBlock } from "sanity"

export type Faq = {
    _id: string
    priority: number
    question: string
    answer: PortableTextBlock[]
}