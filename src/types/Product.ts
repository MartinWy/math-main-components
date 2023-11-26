

/* Type from Sanit.io - math-main-sanity */

export interface Product {
    _id: string
    title: string
    combinable: boolean
    enabled: boolean
    description: any
    unitPriceEuro: number
    recurringInterval: 'weekly' | 'monthly' | 'yearly'
    trialPeriodDays: number
    minQuantity: number
    createdAt: string
    updatedAt: string
    features: any
    stripePriceId: string
    stripeProductId: string
}