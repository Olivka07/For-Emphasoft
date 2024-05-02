import { useState } from 'react';

export const useLoading = () => {
    const [loading, setLoading] = useState(false);
    const changeLoading = (key: boolean) => {
        setLoading(key);
    };
    return { loading, changeLoading };
};
