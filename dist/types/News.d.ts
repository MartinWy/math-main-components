export interface News {
    _id: string;
    visible: boolean;
    headline: string;
    slug: {
        current: string;
    };
    date: string;
    image: {
        _ref: string;
    };
    type: 'press' | 'update' | 'short';
}
