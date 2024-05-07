import React, { FC } from 'react';
import * as classes from './loading.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface LoadingProps {
    className?: string;
}
export const Loading: FC<LoadingProps> = ({ className }) => {
    return (
        <div className={classNames(classes.loading__container)}>
            <span className={classNames(classes.loading, {}, [className])}>
                <span
                    className={classNames(classes.loading__span, {}, [
                        className
                    ])}
                ></span>
                <span
                    className={classNames(classes.loading__span, {}, [
                        className
                    ])}
                ></span>
                <span
                    className={classNames(classes.loading__span, {}, [
                        className
                    ])}
                ></span>
            </span>
        </div>
    );
};
