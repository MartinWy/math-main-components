import { PortableTextBlock } from "sanity";
export interface News {
    visible: boolean;
    headline: string;
    slug: {
        current: string;
    };
    date: string;
    image: string;
    content: PortableTextBlock[];
    short: PortableTextBlock[];
    type: 'press' | 'update' | 'short';
}
