

/* Type from Sanit.io - math-main-sanity */

import { PortableTextBlock } from "sanity";

export type Home = {
    _id: string;
    _type: string;
    helpMockup?: {
        asset: {
            _type: string;
            _ref: string;
        }
    };
    helpTitle: string;
    helpDescription: PortableTextBlock[]
    quote: string;
    targetGroups: TargetGroup[];
}

export type TargetGroup = {
    _key: string;
    _type: string;
    title: string;
    description: string;
    iconName: string;
    buttonText: string;
}