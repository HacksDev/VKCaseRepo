import React from 'react';
import { View, Panel, PanelHeader, PanelHeaderClose, Title, Button, Placeholder } from '@vkontakte/vkui';
import BottomBar from '../common/BottomBar';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const Status = ({ goToView }) => {

    const goBack = (e) => {
        goToView(e)
    }

    return (
        <View id="status" activePanel="main">
            <Panel id="main">
                <PanelHeader style={{marginTop: "20%"}} left={<Icon24Back onClick={goBack} data-to="map" />}>Статус съемки</PanelHeader>
                <Placeholder
                    icon={<Title level="1" style={{color: "var(--primary)", fontSize: "36px"}} weight="bold" >05:48</Title>}
                    header="Осталось"
                    action={<Button size="l">Продлить съемку</Button>}
                >
                   Съемку может завершить только фотограф. После завершения через VK Pay спишется сумма заказа.
          </Placeholder>

                <BottomBar goToView={goToView} id={"map"}></BottomBar>
            </Panel>
        </View>
    )

}

export default Status