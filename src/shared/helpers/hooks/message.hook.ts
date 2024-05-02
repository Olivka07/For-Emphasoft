import { useEffect, useState } from 'react';

export const useMessage = () => {
    const [visible, setVisible] = useState<string | null>(null);
    useEffect(() => {
        if (visible !== null) {
            setTimeout(() => {
                setVisible(null);
            }, 5000);
        }
    }, [visible]);
    const toggle = (payload: string) => {
        setVisible(payload);
    };
    return { visible, toggle };
};
