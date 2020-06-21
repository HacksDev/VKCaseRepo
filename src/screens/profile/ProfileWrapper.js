import React from 'react';
import Person from './Person';
import { View, Panel, PanelHeader } from '@vkontakte/vkui';
import BottomBar from '../common/BottomBar';

const ProfileWrapper = ({ goToView }) => {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader>Мой профиль</PanelHeader>
                <Person isActive={false}></Person>
                <BottomBar goToView={goToView} id={"profile"}></BottomBar>
            </Panel>
        </View>
    )

}

export default ProfileWrapper