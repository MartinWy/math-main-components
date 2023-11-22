export interface CoursePin {
    id: string;
    subscriptionPin: string;
    amountOfUses: number;
    maxAmountOfUses: number;
    createdAt: Date;
    validUntil: Date;
}
