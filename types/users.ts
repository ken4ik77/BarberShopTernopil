export interface UsersBody {
    firstName: string;
    lastName: string;
    phone: string;
    role: string;
    userId: string;

};
export interface UsersResponse {
    page: number;
    perPage: number;
    sortField: string;
    sortOrder: string;
    search: string;
    role: string;
    users: UsersBody[];
};