import { apiInstance } from '../base';
import { AuthToken, IUserDTO, PostUser } from './model';

type LoginParams = Pick<AuthToken, 'password' | 'username'>;
type Token = Pick<AuthToken, 'token'>;

export const login = async (params: LoginParams) => {
    const { token } = await apiInstance.post<Token>('/api/v1/login/', params);
    localStorage.setItem('token', token);
};

export const getUsers = async (): Promise<IUserDTO[]> => {
    const users = await apiInstance.get<IUserDTO[]>('/api/v1/users/');
    return users;
};

export const getUser = async (id: number): Promise<IUserDTO> => {
    const user = await apiInstance.get<IUserDTO>(`/api/v1/users/${id}`);
    return user;
};

export const createUser = async (user: PostUser): Promise<IUserDTO> => {
    const newUser = await apiInstance.post<IUserDTO>(`/api/v1/users/`, user);
    return newUser;
};

export const putUser = async ({
    user,
    id
}: {
    user: PostUser;
    id: number;
}): Promise<IUserDTO> => {
    const changedUser = await apiInstance.put<IUserDTO>(
        `/api/v1/users/${id}`,
        user
    );
    return changedUser;
};

export const deleteUser = async (id: number) => {
    await apiInstance.delete(`/api/v1/users/${id}`);
};
