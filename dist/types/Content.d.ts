import { PortableTextBlock } from "sanity";
export interface Content {
    _id: string;
    priority: number;
    title: string;
    subtitle: string;
    iconName: string;
    description: PortableTextBlock[];
    contentBuckets: Array<ContentBucket>;
}
export interface ContentBucket {
    title: string;
    description: string;
    bucket: string;
}
