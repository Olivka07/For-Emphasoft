import React, { useEffect } from 'react';
import { Modal } from '../../../shared/ui/modal';
import { Message } from '../../../shared/ui/message/Message';
import { useMessage } from '../../../shared/helpers/hooks/message.hook';
import { useNavigate, useParams } from 'react-router-dom';
import { ConfirmUser } from '../../../widgets/form-user/ui/ConfirmUser';

const ConfirmForm = () => {
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

export default ConfirmForm;
