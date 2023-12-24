import { PortableTextBlock } from "sanity";
export interface Home {
    _id: string;
    _type: string;
    helpMockup?: {
        asset: {
            _type: string;
            _ref: string;
        };
    };
    helpTitle: string;
    helpDescription: PortableTextBlock[];
}
