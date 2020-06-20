import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import { Panel, Button } from '@vkontakte/vkui';
import pic2 from '../../img/Board2.svg'
import './onboarding.css'

const Screen2 = ({ id, goToPanel }) => {


  return (
    <Panel id={id} className={"onboarding"}>
      <img alt="pic2" src={pic2}/>
      <p>Получай професиональные фото, которые соберут тысячи лайков</p>
      <Button onClick={goToPanel} data-to="screen3" size="l">Далее</Button>
    </Panel>
  );
}

export default Screen2;

