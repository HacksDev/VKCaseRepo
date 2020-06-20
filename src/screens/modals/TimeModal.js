import React from 'react';
import {ModalPage, ModalPageHeader, PanelHeaderButton, FormLayoutGroup, Radio, Div, Button } from '@vkontakte/vkui';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';

const TimeModal = ({  changeModal, closeModal }) => {
    return (
        <ModalPage id="time"
                onClose={closeModal}
                header={
                    <ModalPageHeader
                        left={<PanelHeaderButton onClick={closeModal}><Icon24Cancel /></PanelHeaderButton>}
                    >Выберите время съемки</ModalPageHeader>}>
                <FormLayoutGroup>
                    <Radio name="sex" defaultChecked>5 минут</Radio>
                    <Radio name="sex" >15 минут</Radio>
                    <Radio name="sex" >30 минут</Radio>
                    <Radio name="sex" >1 час</Radio>
                </FormLayoutGroup>
                <Div>
                    <Button size="xl" onClick={changeModal} data-modal="search">Начать поиск</Button>
                </Div>
        </ModalPage>
    )
}

export default TimeModal;