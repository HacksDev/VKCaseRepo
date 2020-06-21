import React from 'react';
import {ModalPage, ModalPageHeader, PanelHeaderButton } from '@vkontakte/vkui';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Person from '../profile/Person'

const PersonModal = ({  changeModal, closeModal }) => {

    const naming = window.role === "model" ? "Фотограф" : "Клиент"

    return (
        <ModalPage id="photograhper"
            onClose={closeModal}
            header={
                <ModalPageHeader
                    left={<PanelHeaderButton onClick={closeModal}><Icon24Cancel /></PanelHeaderButton>}
            >{naming}</ModalPageHeader>
            }
        >
            <Person isActive={true}></Person>
        </ModalPage>
    )
}

export default PersonModal ;