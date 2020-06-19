import React, {useState} from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import { View } from '@vkontakte/vkui';

import Screen1 from './Screen1'
import Screen2 from './Screen2'

const Onboarding = ({id, goToView}) => {
    const [activePanel, setActivePanel] = useState('screen1');
    const goToPanel = (e) => {
        setActivePanel(e.currentTarget.dataset.to);
    }

	return (
		<View activePanel={activePanel} id={id}>
            <Screen1 goToPanel={goToPanel} id={"screen1"}></Screen1>
            <Screen2 goToView={goToView} id={"screen2"}></Screen2>
        </View>
	);
}

export default Onboarding;

