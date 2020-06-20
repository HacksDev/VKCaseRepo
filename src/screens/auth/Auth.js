import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import { View, Panel, PanelHeader, Button, Div, Title } from '@vkontakte/vkui';

import './auth.css'
import modelPic from '../../img/Model.svg'
import photographerPic from '../../img/Photographer.svg'
import logo from '../../img/Logo.svg'



const Auth = ({ id, goToView }) => {


    return (
        <View activePanel="selection" id={id}>
            <Panel id={"selection"}>
                <Div>
                    <Title level="1" weight="semibold" style={{ marginTop: "20%", textAlign: "center" }}>Я хочу</Title>


                    <div className={"cards"}>
                        <div onClick={goToView} data-to="map">
                            <img src={modelPic}/>
                            <p>Сниматься</p>
                        </div>
                        <div>
                            <img/>
                            <img src={photographerPic}/>
                            <p>Снимать</p>
                        </div>
                    </div>

                  <img className="logo" src={logo}/>

                </Div>
            </Panel>
        </View>
    );
}

export default Auth;

