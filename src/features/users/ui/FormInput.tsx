import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { VALIDATION } from 'shared/config';

type TypeInput = 'checkbox' | 'password';

interface FormInputProps {
    type?: TypeInput;
    title: string;
    value: string | boolean;
    changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}
const FormInput: FC<FormInputProps> = (props) => {
    const [regExp, setRegExp] = useState<RegExp>(null);
    const [maxLength, setMaxLength] = useState<number>(null);
    const [rule, setRule] = useState('');

    const { title, type, value, changeHandler } = props;

    const { t } = useTranslation('form');

    useEffect(() => {
        if (VALIDATION[title]) {
            const valid = VALIDATION[title];
            if (valid['pattern']) {
                const reg = new RegExp(valid['pattern']);
                setRegExp(reg);
            }
            setMaxLength(valid['maxLength']);
        }
    }, []);

    const check = (e: ChangeEvent<HTMLInputElement>) => {
        const v = e.target.value;
        if (regExp && typeof v === 'string') {
            console.log(regExp.test(v));
            if (!regExp.test(v)) setRule(`Incorrect value for ${title};`);
            else setRule('');
        }
        if (typeof v === 'string' && maxLength) {
            console.log(v.length, maxLength);
            if (v.length > maxLength)
                setRule((prev) =>
                    prev !== ''
                        ? `${prev}Correct maxlength is ${maxLength}`
                        : 'Correct maxlength is ${maxLength}'
                );
            else
                setRule((prev) => {
                    return prev.includes(';') ? prev.split(';')[0] : '';
                });
        }
    };

    return (
        <div className='form__item'>
            <label style={{ display: 'block' }} htmlFor={title}>
                {t(title)}
            </label>
            <input
                style={{ display: 'block' }}
                id={title}
                onChange={(e) => {
                    changeHandler(e);
                    check(e);
                }}
                checked={typeof value === 'boolean' ? value : undefined}
                value={typeof value === 'boolean' ? undefined : value}
                type={type ?? 'text'}
            />
            {rule && <span className='form__rule'>{rule}</span>}
        </div>
    );
};

export default FormInput;
