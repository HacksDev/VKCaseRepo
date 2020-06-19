import React, {useState} from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import { Root } from '@vkontakte/vkui';

import Onboarding from './screens/onboarding/Onboarding';

const App = () => {
	const [activeView, setActiveView] = useState('start');


	return (
		<Root activeView={activeView}>
			<Onboarding id="start"></Onboarding>
		</Root>
	);
}

export default App;

