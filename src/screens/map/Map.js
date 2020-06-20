import React, { useState } from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import { View, Panel, Button, ModalRoot, ModalPage, PanelHeaderButton, ModalPageHeader } from '@vkontakte/vkui';
import YMap from './YMap'
import BottomBar from '../common/BottomBar';

const ButtonStyle = {
    position: "absolute",
    bottom: "70px",
    width: "90%",
    left: "5%"
}

const Map = ({ id, goToView }) => {
    const [activeModal, setActiveModal] = useState(null);

    const changeModal = (e) => {
        setActiveModal(e.currentTarget.dataset.modal)
    }

    const closeModal = () => {
        setActiveModal(null)
    }

    const modal = (
        <ModalRoot activeModal={activeModal} >
          <ModalPage id="photograhper" 
          onClose={closeModal}>
            <p>Photographer!</p>
            <p>Photographer!</p>
            <p>Photographer!</p>
            <p>Photographer!</p>
            <p>Photographer!</p>
            <p>Photographer!</p>
            <p>Photographer!</p>
            <p>Photographer!</p>
            <p>Photographer!</p>
          </ModalPage>
        </ModalRoot>
      );

    return (
        <View activePanel="client-map" id={id} modal={modal}>
            <Panel style={{height: "100vh"}} id={"client-map"}>
                <YMap></YMap>
                <Button size="xl" mode="primary" onClick={changeModal} data-modal="photograhper" style={ButtonStyle}>Поиск фотографов</Button>
                <BottomBar id={"map"}></BottomBar>
            </Panel>
        </View>
    );
}

export default Map;

