import React, { useState } from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import { View, Panel, Button, ModalRoot, ModalPage, PanelHeaderButton, ModalPageHeader, FormLayoutGroup, Radio, Div, Group } from '@vkontakte/vkui';
import { RichCell, Avatar } from '@vkontakte/vkui';
import YMap from './YMap'
import BottomBar from '../common/BottomBar';
import Photograhper from '../profile/Photographer'
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon16Place from '@vkontakte/icons/dist/16/place';
import phgrProgile from '../../img/phgr-profile.png'
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import Icon28TagOutline from '@vkontakte/icons/dist/28/tag_outline';
import Label from '../common/Label';


const ButtonStyle = {
    position: "absolute",
    bottom: "10vh",
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

    const openModal = () => {
        setActiveModal("photograhper")
    }

    const modal = (
        <ModalRoot activeModal={activeModal} >
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
            <ModalPage id="search"
                onClose={closeModal}
                header={
                    <ModalPageHeader
                        left={<PanelHeaderButton onClick={closeModal}><Icon24Cancel /></PanelHeaderButton>}
                    >Поиск фотографа</ModalPageHeader>}>
                <Group>
                    <RichCell
                        disabled
                        multiline
                        before={<Avatar size={64} src={phgrProgile} />}
                        text={<Label icon={<Icon24Favorite width={16} fill={"#FFA000"} />} text="4.7"></Label>}
                        after={<Button mode="commerce">Принять</Button>}
                        caption={<Label icon={<Icon28TagOutline width={16} />} text="200 ₽/час"></Label>}>
                        <Label icon={<Icon16Place fill={"#99A2AD"} />} text="Илья Гришин"></Label>
                    </RichCell>
                    <RichCell
                        disabled
                        multiline
                        before={<Avatar size={64} src={phgrProgile} />}
                        text={<Label icon={<Icon24Favorite width={16} fill={"#FFA000"} />} text="4.7"></Label>}
                        after={<Button mode="commerce">Принять</Button>}
                        caption={<Label icon={<Icon28TagOutline width={16} />} text="200 ₽/час"></Label>}>
                        <Label icon={<Icon16Place fill={"#99A2AD"} />} text="Илья Гришин"></Label>
                    </RichCell>
                    <RichCell
                        disabled
                        multiline
                        before={<Avatar size={64} src={phgrProgile} />}
                        text={<Label icon={<Icon24Favorite width={16} fill={"#FFA000"} />} text="4.7"></Label>}
                        after={<Button mode="commerce">Принять</Button>}
                        caption={<Label icon={<Icon28TagOutline width={16} />} text="200 ₽/час"></Label>}>
                        <Label icon={<Icon16Place fill={"#99A2AD"} />} text="Илья Гришин"></Label>
                    </RichCell>
                    <RichCell
                        disabled
                        multiline
                        before={<Avatar size={64} src={phgrProgile} />}
                        text={<Label icon={<Icon24Favorite width={16} fill={"#FFA000"} />} text="4.7"></Label>}
                        after={<Button mode="commerce">Принять</Button>}
                        caption={<Label icon={<Icon28TagOutline width={16} />} text="200 ₽/час"></Label>}>
                        <Label icon={<Icon16Place fill={"#99A2AD"} />} text="Илья Гришин"></Label>
                    </RichCell>
                    <RichCell
                        disabled
                        multiline
                        before={<Avatar size={64} src={phgrProgile} />}
                        text={<Label icon={<Icon24Favorite width={16} fill={"#FFA000"} />} text="4.7"></Label>}
                        after={<Button mode="commerce">Принять</Button>}
                        caption={<Label icon={<Icon28TagOutline width={16} />} text="200 ₽/час"></Label>}>
                        <Label icon={<Icon16Place fill={"#99A2AD"} />} text="Илья Гришин"></Label>
                    </RichCell>
                    <RichCell
                        disabled
                        multiline
                        before={<Avatar size={64} src={phgrProgile} />}
                        text={<Label icon={<Icon24Favorite width={16} fill={"#FFA000"} />} text="4.7"></Label>}
                        after={<Button mode="commerce">Принять</Button>}
                        caption={<Label icon={<Icon28TagOutline width={16} />} text="200 ₽/час"></Label>}>
                        <Label icon={<Icon16Place fill={"#99A2AD"} />} text="Илья Гришин"></Label>
                    </RichCell>
                    
                    
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>



                </Group>
            </ModalPage>

        </ModalRoot>
    );

    return (
        <View activePanel="client-map" id={id} modal={modal}>
            <Panel style={{ height: "100vh" }} id={"client-map"}>
                <YMap openModal={openModal}></YMap>
                <Button size="xl" mode="primary" onClick={changeModal} data-modal="time" style={ButtonStyle}>Поиск фотографов</Button>
                <BottomBar goToView={goToView} id={"map"}></BottomBar>

            </Panel>
        </View>
    );
}

export default Map;

