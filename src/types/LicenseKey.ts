import { Product } from "./Product"


export interface LicenseKey {
    id: string
    product: Product
    productId: string
    pricePayedEuro: number
    valid: boolean
    quantity: boolean
    key: string // encrypted
    createdAt: string
    redeemedOn: string
}