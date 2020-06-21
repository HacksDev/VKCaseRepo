import React, { useState } from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import { View, Panel, Button, PanelHeader, Alert, PanelHeaderClose } from '@vkontakte/vkui';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline';

import BottomBar from '../common/BottomBar';
import TopBarProfile from './TopBarProfile';
import TopBarNotification from './TopBarBotification';
import MapModal from '../modals/MapModal';
import Label from '../common/Label';
import YMap from './YMap'
import Icon28PhoneOutline from '@vkontakte/icons/dist/28/phone_outline';
import Icon28PlaceOutline from '@vkontakte/icons/dist/28/place_outline';

import phgrProfile from '../../img/phgr-profile.png'
import './map.css'

const Map = ({ id, goToView }) => {
    const [activeModal, setActiveModal] = useState(null);

    const changeModal = (e) => {
        if (nextModal === "status") {
            goToView(
                { currentTarget: { dataset: { to: "status" } } }
            )
        } else {
            setActiveModal(e.currentTarget.dataset.modal)
        }
    }

    const closeModal = () => {
        setActiveModal(null)
    }

    const openModal = () => {
        setActiveModal("photograhper")
    }



    const [activeView, setActiveView] = useState("client-map");


    const notificationTopBar = <TopBarNotification
        title="Заказ отменен!"
    />;



    const clearTopBar = null;
    const [topBar, setTopBar] = useState(clearTopBar);

    const callTo = () => {
        window.location.href = "https://vk.com/call?id=162266367"
    }

    const setProfileTopBar = () => {
        const profileTopBar = <TopBarProfile
            name="Илья Гришин"
            rightIcon={<Icon28PhoneOutline onClick={callTo} />}
            avatarPicture={phgrProfile}
            smallCaption={<Label icon={<Icon28PlaceOutline width={16} />} text="150 м"></Label>}
        />
        setTopBar(profileTopBar);
    }

    const startModel = window.role === "model" ? "time" : "search";

    const [nextModal, setNextModal] = useState(startModel);

    const cancelButton = "destructive";
    const defaultButton = "primary";
    const [buttonType, setButtonType] = useState(defaultButton)


    const startTitle = window.role === "model" ? "Поиск фотографа" : "Поиск заказов";
    const [buttonTitle, setButtonTitle] = useState(startTitle);

    const headerHiddden = false;
    const [headerVisible, setHeaderVisible] = useState(headerHiddden);
    const [headerTitle, setHeaderTitle] = useState("");

    const setHeaderTitleFromText = (text) => {
        setHeaderTitle(text);
    }

    const setButtonTitleFromText = (text) => {
        setButtonTitle(text);
    }

    const setHeaderVisibleStatus = (isVisible) => {
        setHeaderVisible(isVisible);
    }

    const setNextModelFromText = (text) => {
        setNextModal(text);
    }


    const [popout, setPopout] = useState(null);

    const closeAlert = () => {
        setPopout(null);
    }

    const openAlert = () => {
        setPopout(
            <Alert
                actionsLayout="vertical"
                actions={[{
                    title: 'Выбрать этого фотографа',
                    autoclose: true,
                    action: () => {
                        setActiveModal("timer");
                    },
                }, {
                    title: 'Отмена',
                    autoclose: true,
                    mode: 'cancel'
                }]}
                onClose={closeAlert}
            >
                <h2>Подтвердите выбор</h2>
                <p>Вы уверены, что хотите начать работать с данным фотографом?</p>
            </Alert>
        )
    }

    return (
        <View activePanel={activeView} id={id}
            modal={
                <MapModal
                    activeModal={activeModal}
                    closeModal={closeModal}
                    changeModal={changeModal}
                    openAlert={openAlert}

                    setProfileTopBar={setProfileTopBar}
                    setHeaderVisibleStatus={setHeaderVisibleStatus}
                    setButtonTitleFromText={setButtonTitleFromText}
                    setHeaderTitleFromText={setHeaderTitleFromText}
                    setNextModelFromText={setNextModelFromText}

                />}

            popout={popout}


        >
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

