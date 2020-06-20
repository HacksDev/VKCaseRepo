import React, {useState} from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import { View } from '@vkontakte/vkui';

import Screen1 from './Screen1'
import Screen2 from './Screen2'
import Screen3 from './Screen3'

const Onboarding = ({id, goToView}) => {
    const [activePanel, setActivePanel] = useState('screen1');
    const goToPanel = (e) => {
        setActivePanel(e.currentTarget.dataset.to);
    }

	return (
		<View activePanel={activePanel} id={id}>
            <Screen1 goToPanel={goToPanel} id={"screen1"}></Screen1>
            <Screen2 goToPanel={goToPanel} id={"screen2"}></Screen2>
            <Screen3 goToView={goToView} id={"screen3"}></Screen3>
        </View>
	);
}

export default Onboarding;

