
import React, { useEffect, useState } from 'react';
import {  ModalCard, Title } from '@vkontakte/vkui';

const TimerModal = ({ closeModal, setProfileTopBar, setHeaderVisibleStatus, setButtonTitleFromText, setHeaderTitleFromText, setNextModelFromText}) => {

    const [count, setCount] = useState(59);

    useEffect(() => {
        const timerIteration = () => {
            setTimeout(() => {

                if (Math.random() > 0.85){
                    closeModal();
                    setProfileTopBar();
                    setHeaderVisibleStatus(true);
                    setButtonTitleFromText("Продолжить");
                    setHeaderTitleFromText("Фотограф в пути");
                    setNextModelFromText("status");
                } else {
                    setCount(count - 1);
                    timerIteration();
                }
            }, 1000);
        }

        timerIteration();
    })

    return (
        <ModalCard id="timer"
            onClose={closeModal}
            icon={<Title level="1" weight="bold" style={{ marginBottom: 16 }}>04:{count}</Title>}
            header="Ждем ответа фотографа"
            caption="Как только фотограф подтвердитили отклонит ваш запрос, мы сообщим"
            actions={[{
                title: 'Отменить запрос',
                mode: 'secondary',
                action: () => {
                    closeModal();
                }
            }]}
        ></ModalCard>
    )

}

export default TimerModal

