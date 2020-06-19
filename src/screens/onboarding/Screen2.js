import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import { Panel, Button, Placeholder} from '@vkontakte/vkui';


const Screen1 = ({id, goToPanel}) => {
	

	return (
		<Panel id={id}>
                <Placeholder
                    header="Уведомления от сообществ"
                    action={<Button onClick={goToPanel} data-to="screen1" size="l">Понятно! Стартуем!</Button>}
                >
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius 
          </Placeholder>
        </Panel>
	);
}

export default Screen1;

