import Stripe from "stripe";
import { Organization } from "./Organization";
import { Product } from "./Product";
import { User } from "./User";
export type SubscriptionFeature = {
    type: "accessMovies" | "accessMaterials" | "accessCalculators";
    available: boolean;
};
export type SubscriptionLimit = {
    type: "maxAmountOfCourses" | "maxTestsPerDay" | "maxAmountOfTestPapers";
    isUnlimited: boolean;
    limit: number;
};
export type SubscriptionEbook = {
    id: string;
};
export type SubscriptionStatus = "active" | "trialing" | "canceled" | "unpaid";
export type SubscriptionType = "monthly" | "yearly";
export type Subscription = {
    id: string;
    organization?: Organization;
    organizationId: string;
    product?: Product;
    productId: string;
    user?: User;
    userId: string;
    currentPeriodPaid: boolean;
    lastPeriodPaid: boolean;
    cancelAtPeriodEnd: boolean;
    currentPeriodStart: Date;
    currentPeriodEnd: Date;
    status: SubscriptionStatus;
    quantity: number;
    newQuantity: number;
    trialEnd: string;
    recurringInterval: SubscriptionType;
    stripeSubscriptionId: string;
    stripeSubscription: Stripe.Subscription;
    stripePaymentMethod: Stripe.PaymentMethod;
    notes: string[];
};
