

/* Type from Sanit.io - math-main-sanity */

import { PortableTextBlock } from "sanity";
import { Category } from "./Category";

export interface Calculator {
    _id: string;
    previewImage: {
        asset: {
            _ref: string,
            _type: string
        }
    }
    title: string;
    url: string;
    description: PortableTextBlock[]
    categories: Category[]
}