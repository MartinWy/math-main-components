import { PortableTextBlock } from "sanity";


export type About = {
    id: number;
    quote: string;
    description: PortableTextBlock[];
    persons: Person[];
}

export type Person = {
    name: string;
    role: string;
    linkedIn: string;
    github: string;
    website: string;
    image?: {
        asset: {
            _ref: string;
            _type: string
        }
    }
}