import Stripe from "stripe"
import { Organization } from "./Organization"
import { Product } from "./Product"
import { User } from "./User"

export interface SubscriptionFeature {
    type: "accessMovies" | "accessMaterials" | "accessCalculators"
    available: boolean
}

export interface SubscriptionLimit {
    type: "maxAmountOfCourses" | "maxTestsPerDay" | "maxAmountOfTestPapers"
    isUnlimited: boolean
    limit: number
}

export interface SubscriptionEbook {
    id: string
}

export type SubscriptionStatus = "active" | "trialing" | "canceled" | "unpaid"


export interface Subscription {
    id: string
    organization?: Organization
    organizationId: string
    product?: Product
    productId: string
    user?: User
    userId: string
    currentPeriodPaid: boolean
    lastPeriodPaid: boolean
    cancelAtPeriodEnd: boolean
    currentPeriodStart: string // utc time
    currentPeriodEnd: string // utc time
    status: SubscriptionStatus // "active" OR "trialing" OR "canceled" OR "unpaid"
    quantity: number
    newQuantity: number
    trialEnd: string
    recurringInterval: string // "month" OR "year"
    stripeSubscriptionId: string
    stripeSubscription: Stripe.Subscription
    stripePaymentMethod: Stripe.PaymentMethod
    notes: string[]
}