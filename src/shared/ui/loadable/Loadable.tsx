import React, { ElementType, Suspense } from 'react';
import { Loading } from '../loading';

export const Loadable = (Component: ElementType) => (props: any) => {
    return (
        <Suspense fallback={<Loading />}>
            <Component {...props} />
        </Suspense>
    );
};
