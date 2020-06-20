import React from 'react'
import { RichCell, Avatar, Button, Separator, Group, CardGrid, Card, Title, SimpleCell, Div} from '@vkontakte/vkui';
import phgrProgile from '../../img/phgr-profile.png'
import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import Icon28TagOutline from '@vkontakte/icons/dist/28/tag_outline';
import Icon16Place from '@vkontakte/icons/dist/16/place';
import Icon28PaletteOutline from '@vkontakte/icons/dist/28/palette_outline';
import Icon28CameraOutline from '@vkontakte/icons/dist/28/camera_outline';
import Icon28PictureStackOutline from '@vkontakte/icons/dist/28/picture_stack_outline';
import Icon28DoneOutline from '@vkontakte/icons/dist/28/done_outline';
import Label from '../common/Label';

const lineStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "0 15px",
    justifyContent: "space-between"
}


const Photographer = ({ isActive }) => {



    return (
        <React.Fragment>
            <RichCell
                disabled
                after={<Icon28InfoOutline />}
                before={<Avatar size={48} src={phgrProgile} />}
                caption={<Label icon={<Icon24Favorite width={16} fill={"#FFA000"} />} text="4.7"></Label>}
            >Илья Гришин</RichCell>

            <Separator style={{ margin: '12px 0' }} />
            <div style={lineStyle}>
                <Button before={<Icon28TagOutline width={16} />}>10 ₽/мин</Button>
                <Title level="4" weight="regular">+10 ₽/фото</Title>
                <Label icon={<Icon16Place fill={"#99A2AD"} />} text="550 м"></Label>
            </div>
            <Separator style={{ margin: '12px 0' }} />

            <SimpleCell before={<Icon28PictureStackOutline />}>Профессиональный фотограф</SimpleCell>
            <SimpleCell before={<Icon28CameraOutline />}>Canon 5D Mark2</SimpleCell>
            <SimpleCell before={<Icon28PaletteOutline />}>Могу ретушировать</SimpleCell>


            <Div>
                {Boolean(isActive) && <Button mode="commerce" size="xl" before={<Icon28DoneOutline />}>Выбрать фотографа</Button>}
            </Div>

            <Group separator="hide">
                <CardGrid>
                    <Card size="s">
                        <div style={{ height: 96 }} />
                    </Card>
                    <Card size="s">
                        <div style={{ height: 96 }} />
                    </Card>
                    <Card size="s">
                        <div style={{ height: 96 }} />
                    </Card>
                </CardGrid>
                <CardGrid>
                    <Card size="s">
                        <div style={{ height: 96 }} />
                    </Card>
                    <Card size="s">
                        <div style={{ height: 96 }} />
                    </Card>
                    <Card size="s">
                        <div style={{ height: 96 }} />
                    </Card>
                </CardGrid>
                <CardGrid>
                    <Card size="s">
                        <div style={{ height: 96 }} />
                    </Card>
                    <Card size="s">
                        <div style={{ height: 96 }} />
                    </Card>
                    <Card size="s">
                        <div style={{ height: 96 }} />
                    </Card>
                </CardGrid>
            </Group>



        </React.Fragment>
    )
}

export default Photographer