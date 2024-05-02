export const API_URL = 'https://test-assignment.emphasoft.com';

type ValidationType = {
    [key: string]: {
        pattern?: string;
        maxLength: number;
    };
};

export const VALIDATION: ValidationType = {
    username: {
        pattern: '^[\\w.@+-]+$',
        maxLength: 150
    },
    first_name: {
        maxLength: 150
    },
    last_name: {
        maxLength: 150
    },
    password: {
        pattern: '^(?=.*[A-Z])(?=.*\\d).{8,}$',
        maxLength: 128
    }
} as const;
