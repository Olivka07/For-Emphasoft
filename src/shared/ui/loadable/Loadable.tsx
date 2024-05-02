import React, { ElementType, Suspense } from 'react';

export const Loadable = (Component: ElementType) => (props: any) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Component {...props} />
        </Suspense>
    );
};
