import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import { Panel, Button, Placeholder, Title } from '@vkontakte/vkui';
import pic1 from '../../img/Board1.svg'
import './onboarding.css'

const Screen1 = ({ id, goToPanel }) => {


  return (
    <Panel id={id} className={"onboarding"}>
      <img src={pic1}/>
      <p>Внеси спонтанность в процесс фотографии: снимайся когда хочешь и где хочешь</p>
      <Button onClick={goToPanel} data-to="screen2" size="l">Далее</Button>
    </Panel>
  );
}

export default Screen1;

