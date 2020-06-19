import React, {useState} from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import { Root } from '@vkontakte/vkui';

import Onboarding from './screens/onboarding/Onboarding';
import Auth from './screens/auth/Auth';

const App = () => {
	const [activeView, setActiveView] = useState('start');
	
	const goToView = (e) => {
		setActiveView(e.currentTarget.dataset.to)
	}

	return (
		<Root activeView={activeView}>
			<Onboarding goToView={goToView} id="start"></Onboarding>
			<Auth id="auth"></Auth>
		</Root>
	);
}

export default App;

