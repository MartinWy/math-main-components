import { Product } from "./Product";
export type LicenseKey = {
    id: string;
    product: Product;
    productId: string;
    pricePayedEuro: number;
    valid: boolean;
    quantity: number;
    key: string;
    createdAt: string;
    redeemedOn: string;
};
