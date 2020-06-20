import React, {useState} from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import { Root } from '@vkontakte/vkui';

import Onboarding from './screens/onboarding/Onboarding';
import Auth from './screens/auth/Auth';
import Map from './screens/map/Map';
import Profile from './screens/profile/Profile';

const App = () => {

	let startScreen = "start";
	// if (localStorage.getItem("again") !== null) {
	// 	startScreen = "auth"
	// } else {
	// 	localStorage.setItem("again", 1)
	// 	startScreen = "start";
	// }

	const [activeView, setActiveView] = useState(startScreen);
	
	const goToView = (e) => {
		setActiveView(e.currentTarget.dataset.to)
	}

	return (
		<Root activeView={activeView}>
			<Onboarding goToView={goToView} id="start"></Onboarding>
			<Auth goToView={goToView} id="auth"></Auth>
			<Map goToView={goToView} id="map"></Map>
			<Profile goToView={goToView} id="profile"></Profile>
		</Root>
	);
}

export default App;

