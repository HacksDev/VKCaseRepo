import React from 'react';
import { ModalPage, ModalPageHeader, PanelHeaderButton, Button, Group, RichCell, Avatar } from '@vkontakte/vkui';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Label from '../common/Label';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import Icon28TagOutline from '@vkontakte/icons/dist/28/tag_outline';
import Icon28Place from '@vkontakte/icons/dist/28/place';


import pic0 from '../../img/phgr-profile.png'
import pic1 from '../../img/pic1.png'
import pic2 from '../../img/pic2.png'
import pic3 from '../../img/pic3.png'
import pic4 from '../../img/pic4.png'

const dataSetForModels = [
    {
        name: "Константин Иванов",
        rating: "5.0",
        picture: pic0,
        distance: "128 м",
        caption: "27 ₽/мин"
    },
    {
        name: "Елена Фролова",
        rating: "4.7",
        picture: pic1,
        distance: "321 м",
        caption: "25 ₽/мин"
    },
    {
        name: "Святослав Петров",
        rating: "4.7",
        picture: pic2,
        distance: "450 м",
        caption: "20 ₽/мин"
    },
    {
        name: "Анна Федорова",
        rating: "3.8",
        picture: pic3,
        distance: "551 м",
        caption: "29 ₽/мин"
    },
    {
        name: "Игорь Барышев",
        rating: "4.9",
        picture: pic4,
        distance: "50 м",
        caption: "25 ₽/мин"
    }
]


const dataSetForPhotograhpers = [
    {
        name: "Константин Иванов",
        rating: "5.0",
        picture: pic0,
        distance: "128 м",
        caption: "5 мин"
    },
    {
        name: "Елена Фролова",
        rating: "4.7",
        picture: pic1,
        distance: "321 м",
        caption: "15 мин"
    },
    {
        name: "Святослав Петров",
        rating: "4.7",
        picture: pic2,
        distance: "450 м",
        caption: "30 мин"
    },
    {
        name: "Анна Федорова",
        rating: "3.8",
        picture: pic3,
        distance: "551 м",
        caption: "60 мин"
    },
    {
        name: "Игорь Барышев",
        rating: "4.9",
        picture: pic4,
        distance: "50 м",
        caption: "15 мин"
    }
]



const RatingIcon = (rating) => {
    return (
        <Label icon={<Icon24Favorite width={16} fill={"#FFA000"} />} text={rating}></Label>
    )
}

const AcceptButton = (openAlert) => {
    return <Button onClick={openAlert} mode="primary">Выбрать</Button>
}

const Caption = (text) => {
    const Icon = window.role === "model" ? <Icon28TagOutline width={16} /> : <Icon28Place width={16} />  ;
    return <Label icon={Icon} text={text}></Label>
}

const getAvatar = (picture) => {
    return <Avatar size={64} src={picture} />
}

const SearchModal = ({ changeModal, closeModal, openAlert }) => {
    const  dataSet = window.role === "model" ? dataSetForModels : dataSetForPhotograhpers;
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
                            actions={AcceptButton(openAlert)}>
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