import React, { useState } from 'react'
import { RichCell, Avatar, Button, Separator, Group, CardGrid, Card, Title, SimpleCell, Div, Header } from '@vkontakte/vkui';
import phgrProgile from '../../img/phgr-profile.png'
import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import Icon28TagOutline from '@vkontakte/icons/dist/28/tag_outline';
import Icon16Place from '@vkontakte/icons/dist/16/place';
import Icon28PaletteOutline from '@vkontakte/icons/dist/28/palette_outline';
import Icon28CameraOutline from '@vkontakte/icons/dist/28/camera_outline';
import Icon28PictureStackOutline from '@vkontakte/icons/dist/28/picture_stack_outline';
import Icon28HomeOutline from '@vkontakte/icons/dist/28/home_outline';
import Icon28DoneOutline from '@vkontakte/icons/dist/28/done_outline';
import Icon28LogoVkOutline from '@vkontakte/icons/dist/28/logo_vk_outline';
import Icon28BrainOutline from '@vkontakte/icons/dist/28/brain_outline';
import Label from '../common/Label';

import pic1 from '../../img/1.png'
import pic2 from '../../img/2.png'
import pic3 from '../../img/3.png'
import pic4 from '../../img/4.png'
import pic5 from '../../img/5.png'
import pic6 from '../../img/6.png'
import pic7 from '../../img/7.png'
import pic8 from '../../img/8.png'
import pic9 from '../../img/9.png'

const lineStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "0 15px",
    justifyContent: "space-between"
}


const Person = ({ isActive }) => {

    const isPhotographer = window.role === "model" ? false : true;

    return (
        <React.Fragment>
            <RichCell
                disabled
                after={<Icon28InfoOutline />}
                before={<Avatar size={48} src={phgrProgile} />}
                caption={<Label icon={<Icon24Favorite width={16} fill={"#FFA000"} />} text="4.7"></Label>}
            >Илья Гришин</RichCell>


            {Boolean(isActive) && !isPhotographer && <React.Fragment>
                <Separator style={{ margin: '12px 0' }} />
                <div style={lineStyle}>
                    <Button before={<Icon28TagOutline width={16} />}>25 ₽/мин</Button>
                    <Label icon={<Icon16Place fill={"#99A2AD"} />} text="550 м"></Label>
                </div>
                <Separator style={{ margin: '12px 0' }} />
            </React.Fragment>
            }



            {((isPhotographer && Boolean(isActive)) || (!isPhotographer && !Boolean(isActive))) &&<React.Fragment>
                <SimpleCell before={<Icon28HomeOutline />}>Город: Москва</SimpleCell>
                <SimpleCell before={<Icon28LogoVkOutline />}>5184 подписчиков</SimpleCell>
                <SimpleCell before={<Icon28BrainOutline />}>МГУ</SimpleCell>
            </React.Fragment>}

            {((!isPhotographer && Boolean(isActive)) || (isPhotographer && !Boolean(isActive))) && <React.Fragment>
                <SimpleCell before={<Icon28PictureStackOutline />}>Профессиональный фотограф</SimpleCell>
                <SimpleCell before={<Icon28CameraOutline />}>Canon 5D Mark2</SimpleCell>
                <SimpleCell before={<Icon28PaletteOutline />}>Могу ретушировать</SimpleCell>
            </React.Fragment>}


            <Div>
                {Boolean(isActive) && !isPhotographer && <Button mode="commerce" size="xl" before={<Icon28DoneOutline />}>Выбрать фотографа</Button>}
                {Boolean(isActive) && isPhotographer && <Button mode="commerce" size="xl" before={<Icon28DoneOutline />}>Выбрать заказ</Button>}
            </Div>

            <Group separator="hide">
                {!Boolean(isActive) && !isPhotographer && <Header mode="secondary">Купленные фотографии</Header>}
                {!Boolean(isActive) && isPhotographer && <Header mode="secondary">Мои фотографии</Header>}
                {Boolean(isActive) && !isPhotographer && <Header mode="secondary">Портфолио</Header>}
                {Boolean(isActive) && isPhotographer && <Header mode="secondary">Купленные фотографии</Header>}
                
                <CardGrid>
                    <Card size="s">
                        <div style={{ height: 96, backgroundImage: `url(${pic1})`, backgroundSize: "cover" }} />
                    </Card>
                    <Card size="s">
                        <div style={{ height: 96, backgroundImage: `url(${pic2})`, backgroundSize: "cover" }} />
                    </Card>
                    <Card size="s">
                        <div style={{ height: 96, backgroundImage: `url(${pic3})`, backgroundSize: "cover" }} />
                    </Card>
                </CardGrid>
                <CardGrid>
                <Card size="s">
                        <div style={{ height: 96, backgroundImage: `url(${pic4})`, backgroundSize: "cover" }} />
                    </Card>
                    <Card size="s">
                        <div style={{ height: 96, backgroundImage: `url(${pic5})`, backgroundSize: "cover" }} />
                    </Card>
                    <Card size="s">
                        <div style={{ height: 96, backgroundImage: `url(${pic6})`, backgroundSize: "cover" }} />
                    </Card>
                </CardGrid>
                <CardGrid>
                <Card size="s">
                        <div style={{ height: 96, backgroundImage: `url(${pic7})`, backgroundSize: "cover" }} />
                    </Card>
                    <Card size="s">
                        <div style={{ height: 96, backgroundImage: `url(${pic8})`, backgroundSize: "cover" }} />
                    </Card>
                    <Card size="s">
                        <div style={{ height: 96, backgroundImage: `url(${pic9})`, backgroundSize: "cover" }} />
                    </Card>
                </CardGrid>
            </Group>



        </React.Fragment>
    )
}

export default Person