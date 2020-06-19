import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import { Panel, Button, Placeholder} from '@vkontakte/vkui';


const Screen1 = ({id, goToPanel}) => {
	

	return (
		<Panel id={id}>
                <Placeholder
                    header="Уведомления от сообществ"
                    action={<Button onClick={goToPanel} data-to="screen2" size="l">Далее</Button>}
                >
            Подключите сообщества, от которых Вы хотите получать уведомления
          </Placeholder>
        </Panel>
	);
}

export default Screen1;

