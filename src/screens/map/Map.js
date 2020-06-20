import React, { useState } from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import { View, Panel, Button, PanelHeader } from '@vkontakte/vkui';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline';

import BottomBar from '../common/BottomBar';
import TopBarProfile from './TopBarProfile';
import TopBarNotification from './TopBarBotification';
import MapModal from '../modals/MapModal';
import Label from '../common/Label';
import YMap from './YMap'

import phgrProfile from '../../img/phgr-profile.png'
import './map.css'

const Map = ({ id, goToView }) => {
    const [activeModal, setActiveModal] = useState(null);

    const changeModal = (e) => {
        setActiveModal(e.currentTarget.dataset.modal)
    }

    const closeModal = () => {
        setActiveModal(null)
    }

    const openModal = () => {
        setActiveModal("photograhper")
    }



    const profileTopBar = <TopBarProfile
        name="Илья Гришин"
        rightIcon={<Icon28InfoOutline />}
        avatarPicture={phgrProfile}
        smallCaption={<Label icon={<Icon24Favorite width={16} fill={"#FFA000"} />} text="4.7"></Label>}
    />
    const notificationTopBar = <TopBarNotification
        title="Заказ отменен!"
    />;
    const clearTopBar = null;
    const [topBar, setTopBar] = useState(notificationTopBar);


    const [nextModal, setNextModal] = useState("time");

    const cancelButton = "destructive";
    const defaultButton = "primary";
    const [buttonType, setButtonType] = useState(cancelButton)
    const [buttonTitle, setButtonTitle] = useState("Hello");

    const headerHiddden = false;
    const [headerVisible, setHeaderVisible] = useState(headerHiddden);
    const [headerTitle, setHeaderTitle] = useState("");


    return (
        <View activePanel="client-map" id={id} modal={
            <MapModal
                activeModal={activeModal}
                closeModal={closeModal}
                changeModal={changeModal}
            />
        }>
            <Panel id={"client-map"}>
                {headerVisible & <PanelHeader>{headerTitle}</PanelHeader>}

                <YMap openModal={openModal}></YMap>

                <br /><br /><br /><br />
                {topBar}

                <Button className="map-button" size="xl" mode={buttonType} onClick={changeModal} data-modal={nextModal}>{buttonTitle}</Button>
                <BottomBar goToView={goToView} id={"map"}></BottomBar>
            </Panel>
        </View>
    );
}

export default Map;

