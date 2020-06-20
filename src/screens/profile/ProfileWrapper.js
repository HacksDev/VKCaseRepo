import React from 'react';
import Photographer from './Photographer';
import { View, Panel } from '@vkontakte/vkui';
import BottomBar from '../common/BottomBar';

const ProfileWrapper = ({ goToView }) => {
    return (
        <View activePanel="main">
            <Panel id="main">
                <Photographer isActive={false}></Photographer>
                <BottomBar goToView={goToView} id={"profile"}></BottomBar>
            </Panel>
        </View>
    )

}

export default ProfileWrapper