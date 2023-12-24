import { PortableTextBlock } from "sanity"

/* Type from Sanit.io - math-main-sanity */

export interface News {
    _id: string
    visible: boolean
    headline: string
    slug: {
        current: string
    }
    date: string
    image: {
        asset: {
            _ref: string;
            _type: string;
        };
    };
    content: PortableTextBlock[]
    short: PortableTextBlock[]
    type: 'press' | 'update' | 'short'
}