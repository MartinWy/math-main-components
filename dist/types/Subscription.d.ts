import Stripe from "stripe";
import { Organization } from "./Organization";
import { Product } from "./Product";
import { User } from "./User";
export interface SubscriptionFeature {
    limit: number;
    isUnlimited: boolean;
    type: string;
}
export interface Subscription {
    id: string;
    organization?: Organization;
    organizationId: string;
    product?: Product;
    productId: string;
    user?: User;
    userId: string;
    features?: SubscriptionFeature[];
    currentPeriodPaid: boolean;
    lastPeriodPaid: boolean;
    cancelAtPeriodEnd: boolean;
    currentPeriodStart: string;
    currentPeriodEnd: string;
    status: string;
    quantity: number;
    newQuantity: number;
    trialEnd: string;
    recurringInterval: string;
    stripeSubscriptionId: string;
    stripeSubscription: Stripe.Subscription;
    stripePaymentMethod: Stripe.PaymentMethod;
    notes: string[];
}
