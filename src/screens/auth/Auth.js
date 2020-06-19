import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import { View, Panel, PanelHeader, Button, Div } from '@vkontakte/vkui';
import Icon28CameraOutline from '@vkontakte/icons/dist/28/camera_outline';
import Icon28SmileOutline from '@vkontakte/icons/dist/28/smile_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';


const Auth = ({ id, goToView }) => {


    return (
        <View activePanel="selection" id={id}>
            <Panel id={"selection"}>
                <PanelHeader>Выбор роли</PanelHeader>
                <Div>
                    <Button size="xl" onClick={goToView} data-to="map" before={<Icon28SmileOutline />}>Я хочу найти фотографа</Button>
                    <br/>
                    <Button size="xl" before={<Icon28CameraOutline />}>Я фотограф</Button>
                    <br/>
                    <Button size="xl" before={<Icon28FireOutline />}>Я мамкин панк-кодер и хочу кушать</Button>
                </Div>
            </Panel>
        </View>
    );
}

export default Auth;

