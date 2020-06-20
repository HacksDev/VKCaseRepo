import React from 'react';
import { ModalPage, ModalPageHeader, PanelHeaderButton, Button, Group, RichCell, Avatar } from '@vkontakte/vkui';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Label from '../common/Label';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import Icon28TagOutline from '@vkontakte/icons/dist/28/tag_outline';

const dataSetForModels = [
    {
        name: "Илья Гришин",
        rating: "4.7",
        picture: "",
        distance: "50 м",
        caption: "1050"
    },
    {
        name: "Илья Гришин",
        rating: "4.7",
        picture: "",
        distance: "50 м",
        caption: "1050"
    },
    {
        name: "Илья Гришин",
        rating: "4.7",
        picture: "",
        distance: "50 м",
        caption: "1050"
    },
    {
        name: "Илья Гришин",
        rating: "4.7",
        picture: "",
        distance: "50 м",
        caption: "1050"
    },
    {
        name: "Илья Гришин",
        rating: "4.7",
        picture: "",
        distance: "50 м",
        caption: "1050"
    }
]

const RatingIcon = (rating) => {
    return (
        <Label icon={<Icon24Favorite width={16} fill={"#FFA000"} />} text={rating}></Label>
    )
}

const AcceptButton = () => {
    return <Button mode="commerce">Выбрать</Button>
}

const Caption = (text) => {
    return <Label icon={<Icon28TagOutline width={16} />} text={text}></Label>
}

const getAvatar = (picture) => {
    return <Avatar size={64} src={picture} />
}

const SearchModal = ({ changeModal, closeModal }) => {

    const dataSet = dataSetForModels;
    const headerTitle = window.role === "model" ? "Поиск фотографа" : "Поиск заказа";

    return (
        <ModalPage id="search"
            onClose={closeModal}
            header={
                <ModalPageHeader
                    left={<PanelHeaderButton onClick={closeModal}><Icon24Cancel /></PanelHeaderButton>}
            >{headerTitle}</ModalPageHeader>}>
            <Group>

                {dataSet.map((user, i) => {
                    return (
                        <RichCell
                            key={i+user.name}
                            disabled
                            multiline
                            before={getAvatar(user.picture)}
                            text={RatingIcon(user.rating)}
                            after={user.distance}
                            caption={Caption(user.caption)}
                            actions={AcceptButton()}>
                            {user.name}
                        </RichCell>
                    )
                })
                }






            </Group>
        </ModalPage>
    )
}

export default SearchModal;