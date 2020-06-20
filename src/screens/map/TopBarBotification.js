import React from 'react';
import { CardGrid, Card, Title } from '@vkontakte/vkui';

const TopBarNotification = ({title}) => {
    return (
        <CardGrid>
            <Card size="l" mode="shadow">
                <Title level="3" weight="regular" style={{ margin: 16 }}>{title}</Title>
            </Card>
        </CardGrid>
    )
}

export default TopBarNotification;