import { PortableTextBlock } from "sanity";
import { Category } from "./Category";
import { Product } from "./Product";
export type Ebook = {
    _id: string;
    title: string;
    previewImage: {
        asset: {
            _ref: string;
            _type: string;
        };
    };
    author: string;
    amountOfPages: number;
    fileId: string;
    fileExpire?: string;
    fileUrl?: string;
    description: PortableTextBlock[];
    shortDescription: string;
    categories: Category[];
    product?: Product;
};
