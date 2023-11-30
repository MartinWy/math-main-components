

/* Type from Sanit.io - math-main-sanity */

import { PortableTextBlock } from "sanity"
import { Ebook } from "./Ebook"
import { ProductLimit } from "./ProductLimit"

export interface Product {
    _id: string
    title: string
    combinable: boolean
    enabled: boolean
    type: "organizational" | "personal"
    description: PortableTextBlock[]
    unitPriceEuro: number
    recurringInterval: 'weekly' | 'monthly' | 'yearly'
    trialPeriodDays: number
    minQuantity: number
    createdAt: string
    updatedAt: string
    accessMaterials: boolean
    accessMovies: boolean
    accessCalculators: boolean
    limits: ProductLimit[]
    ebooks: Ebook[]
    stripePriceId: string
    stripeProductId: string
}