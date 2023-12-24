import { PortableTextBlock } from "sanity";
export interface About {
    id: number;
    quote: string;
    description: PortableTextBlock[];
    persons: Person[];
}
export interface Person {
    name: string;
    role: string;
    linkedIn: string;
    github: string;
    website: string;
    image: {
        asset: {
            url: string;
        };
    };
}
