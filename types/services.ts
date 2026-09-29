export interface ServiceBody {
    name: string;
    description: string;
    durationMinutes: number;
    price: number;
    isActive: boolean;
};
export interface ServicesResponse {
page: number;
        perPage: number;
        sortField: string;
        sortOrder: string;
    search: string;
    isActive: boolean;
    serviceId: string;
    minPrice: number;
    maxPrice: number;
    services: ServiceBody[];
};