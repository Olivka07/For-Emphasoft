import React, { useEffect } from 'react';
import { Modal } from 'shared/ui/modal';
import { FormAuthorize } from 'widgets/form-auth/ui/FormAuthorize';
import { Message } from 'shared/ui/message/Message';
import { useMessage } from 'shared/helpers/hooks/message.hook';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
    const { toggle, visible } = useMessage();
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
            <Message visible={visible} />
            <Modal>
                <div>
                    <FormAuthorize toggle={toggle} />
                </div>
            </Modal>
        </>
    );
};

export default AuthForm;
