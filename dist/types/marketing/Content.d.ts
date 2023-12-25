import { PortableTextBlock } from "sanity";
export interface Content {
    _id: string;
    priority: number;
    title: string;
    subtitle: string;
    iconName: string;
    description: PortableTextBlock[];
    isComingSoon: boolean;
    contentBuckets: ContentBucket[];
}
export interface ContentBucket {
    title: string;
    description: string;
    bucket: string;
    image?: {
        asset: {
            _ref: string;
            _type: string;
        };
    };
}
