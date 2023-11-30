export interface WebsiteData {
    _id: string;
    heroDescription: string;
    heroTitle: string;
    title: string;
    copyright: string;
    footerLeftColumn: string;
    footerMiddleColumn: string;
    footerRightColumn: string;
    textBelowSchoolPricing: [];
    defaultPersonalProduct: {
        _ref: string;
    };
    defaultOrganizationProduct: {
        _ref: string;
    };
    testsEnabled: boolean;
    moviesEnabled: boolean;
    calculatorsEnabled: boolean;
    materialsEnabled: boolean;
}
