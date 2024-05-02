export interface IUserDTO {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    is_active: boolean;
    last_login: string;
    is_superuser: boolean;
}

export interface PostUser {
    username: string;
    first_name: string;
    last_name: string;
    is_active: boolean;
    password: string;
}

export interface AuthToken {
    username: string;
    password: string;
    token: string;
}

export type PatchedUser = Partial<IUserDTO>;
