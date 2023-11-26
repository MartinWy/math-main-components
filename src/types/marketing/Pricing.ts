import { Product } from "../Product"
import { ProductFeature } from "../ProductFeature"

/* Type from Sanit.io - math-main-sanity */

export interface Pricing {
    _id: string
    title: string
    position: PricingPosition
    limitation: string
    subtitle: string
    slogan: string
    recommended: boolean
    features: ProductFeature[]
    buttonText: string
    product: Product
}

type PricingPosition = 'personal-left' | 'personal-right' | 'schools-left' | 'schools-right'