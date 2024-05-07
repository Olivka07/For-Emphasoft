import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ConfirmUser } from 'widgets/form-user/ui/ConfirmUser';

const ConfirmFormPage = () => {
    const navigate = useNavigate();
    function escDown(evt: KeyboardEvent) {
        let isEscape = false;
        isEscape = evt.key === 'Escape' || evt.key === 'Esc';
        if (isEscape) navigate('../');
    }
    useEffect(() => {
        document.addEventListener('keydown', escDown);
        return () => {
            document.removeEventListener('keydown', escDown);
        };
    }, []);
    return (
        <>
            <div className='form__confirm-modal'>
                <ConfirmUser />
            </div>
        </>
    );
};

export default ConfirmFormPage;
