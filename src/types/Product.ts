

/* Type from Sanit.io - math-main-sanity */

import { PortableTextBlock } from "sanity"
import { Ebook } from "./Ebook"

export type Product = {
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


/* Type from Sanit.io - math-main-sanity */

export type ProductLimit = {
    _id: string
    _type: string
    _key: string
    type: "maxAmountOfCourses" | "maxTestsPerDay" | "maxAmountOfTestPapers"
    isUnlimited: boolean
    limit: number
}