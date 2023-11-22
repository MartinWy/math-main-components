import { PortableTextBlock } from "sanity";
export interface Content {
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
