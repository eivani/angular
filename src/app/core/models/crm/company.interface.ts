export interface ICompany {
    CompanyID: number;
    CompanyName: string;
    Address: string;
    Email?: string
    GroupID?: number;
    GroupName?: string;
    IndustryID?: number;
    IndustryName?: string;
    RegionID?: number;
    RegionName?: string;
    RecommenderID?: number;
    RecommenderName?: string;
    LastNegotiationAction?: string;
    IsCustomer?: boolean;
    IsActive?: boolean;
    Unsubscribed?: boolean;
    Comment?: string;
    Registrar: string;
    RegisterDate: string;
}