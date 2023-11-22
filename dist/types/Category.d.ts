export interface Category {
    _id: string;
    title: string;
    isTopLevel: boolean;
    hasEBooks: boolean;
    hasMovies: boolean;
    hasWhy: boolean;
    hasCalculators: boolean;
    hasPoster: boolean;
    childrenCategories: Category[];
    relatedCategories: Category[];
}
