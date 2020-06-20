import React, {useState} from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import { Root } from '@vkontakte/vkui';

import Onboarding from './screens/onboarding/Onboarding';
import Auth from './screens/auth/Auth';
import Map from './screens/map/Map';

const App = () => {
	const [activeView, setActiveView] = useState('start');
	
	const goToView = (e) => {
		console.log(e.currentTarget.dataset.to)
		setActiveView(e.currentTarget.dataset.to)
	}

	return (
		<Root activeView={activeView}>
			<Onboarding goToView={goToView} id="start"></Onboarding>
			<Auth goToView={goToView} id="auth"></Auth>
			<Map id="map"></Map>
		</Root>
	);
}

export default App;

