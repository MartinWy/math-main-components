
/* Type from Sanit.io - math-main-sanity */

export interface Concept {
    _id: string
    title: string
    subtitle: string
    description: string
    iconName: string
    image?: {
        asset: {
            _ref: string,
            _type: string
        }
    }
}