import { PortableTextBlock } from "sanity";
export type News = {
    _id: string;
    visible: boolean;
    headline: string;
    slug: {
        current: string;
    };
    date: string;
    image: {
        asset: {
            _ref: string;
            _type: string;
        };
    };
    content: PortableTextBlock[];
    short: PortableTextBlock[];
    type: 'press' | 'update' | 'short';
};
