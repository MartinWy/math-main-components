

/* Type from Sanit.io - math-main-sanity */

export interface Feature {
    _id: string
    priority: number
    title: string
    subtitle: string
    iconName: string
    description: string
    image?: {
        asset: {
            _ref: string,
            _type: string
        }
    }
}