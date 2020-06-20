import React from 'react';
import {ModalPage, ModalPageHeader, PanelHeaderButton } from '@vkontakte/vkui';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Photograhper from '../profile/Photographer'

const PhotographerModal = ({  changeModal, closeModal }) => {
    return (
        <ModalPage id="photograhper"
            onClose={closeModal}
            header={
                <ModalPageHeader
                    left={<PanelHeaderButton onClick={closeModal}><Icon24Cancel /></PanelHeaderButton>}
                >Фотограф</ModalPageHeader>
            }
        >
            <Photograhper isActive={true}></Photograhper>
        </ModalPage>
    )
}

export default PhotographerModal ;