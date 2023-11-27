

/* Type from Sanit.io - math-main-sanity */

export interface ProductLimit {
    _id: string
    _type: string
    _key: string
    type: "maxAmountOfCourses" | "maxTestsPerDay" | "maxAmountOfTestPapers"
    isUnlimited: boolean
    limit: number
}