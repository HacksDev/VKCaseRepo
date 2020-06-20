import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import { View, Panel, Div, Title } from '@vkontakte/vkui';

import './auth.css'
import modelPic from '../../img/Model.svg'
import photographerPic from '../../img/Photographer.svg'
import logo from '../../img/Logo.svg'



const Auth = ({ id, goToView }) => {

    const setRole = (e) => {
        window.role = e.currentTarget.dataset.role;
        goToView(e);
    }


    return (
        <View activePanel="selection" id={id}>
            <Panel id={"selection"}>
                <Div>
                    <Title level="1" weight="semibold" style={{ marginTop: "20%", textAlign: "center" }}>Я хочу</Title>


                    <div className={"cards"}>
                        <div onClick={setRole} data-role="model" data-to="map">
                            <img alt="model" src={modelPic}/>
                            <p>Сниматься</p>
                        </div>
                        <div onClick={setRole} data-role="photographer">
                            <img alt="master"  src={photographerPic}/>
                            <p>Снимать</p>
                        </div>
                    </div>

                  <img className="logo" alt="logo" src={logo}/>

                </Div>
            </Panel>
        </View>
    );
}

export default Auth;

