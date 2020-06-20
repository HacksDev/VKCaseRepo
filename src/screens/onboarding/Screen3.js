import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import { Panel, Button, Placeholder } from '@vkontakte/vkui';

import pic3 from '../../img/Board3.svg'
import './onboarding.css'


const Screen3 = ({ id, goToView }) => {


  return (
    <Panel id={id} className={"onboarding"}>
      <img src={pic3} />
      <p>Преврати хобби в профессию. Пополняй портфолио</p>
      <Button onClick={goToView} data-to="auth" size="l">Понятно!</Button>
    </Panel>
  );
}

export default Screen3;

