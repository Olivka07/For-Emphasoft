import React, { useEffect } from 'react';
import { Modal } from 'shared/ui/modal';
import { Message } from 'shared/ui/message/Message';
import { useMessage } from 'shared/helpers/hooks/message.hook';
import { useNavigate, useParams } from 'react-router-dom';
import { FormUser } from 'widgets/form-user/ui/FormUser';
import { useLoading } from 'shared/helpers/hooks/loading.hook';
import { Loading } from 'shared/ui/loading';

const UserFormPage = () => {
    const { id } = useParams();
    const { toggle, visible } = useMessage();
    const { changeLoading, loading } = useLoading();

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
            {loading && <Loading />}
            <Modal>
                <div>
                    <FormUser
                        changeLoading={changeLoading}
                        loading={loading}
                        id={Number(id) ?? undefined}
                        toggle={toggle}
                    />
                </div>
            </Modal>
        </>
    );
};

export default UserFormPage;
