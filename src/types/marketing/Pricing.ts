import { PortableTextBlock } from "sanity"
import { Product } from "../Product"

/* Type from Sanit.io - math-main-sanity */

export interface Pricing {
    _id: string
    title: string
    position: PricingPosition
    limitation: string
    subtitle: string
    slogan: string
    recommended: boolean
    features: PortableTextBlock[]
    buttonText: string
    product: Product
    enableMoreInfoLink: boolean
    moreInfoLink: string
}

type PricingPosition = 'personal-left' | 'personal-right' | 'schools-left' | 'schools-right'