import React from 'react';
import { CardGrid, Card, RichCell, Avatar } from '@vkontakte/vkui';

const TopBarProfile = ({ name, rightIcon, avatarPicture, smallCaption }) => {
    return (
        <CardGrid>
            <Card size="l" mode="shadow">
                <RichCell
                    disabled
                    multiline
                    before={<Avatar size={48} src={avatarPicture} />}
                    after={rightIcon}
                    caption={smallCaption}
                >{name}</RichCell>
            </Card>
        </CardGrid>
    )
}

export default TopBarProfile;