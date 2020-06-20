import React, { useState } from 'react'
import { Epic, Tabbar, TabbarItem } from '@vkontakte/vkui';

import Icon28PlaceOutline from '@vkontakte/icons/dist/28/place_outline';
import Icon28Profile from '@vkontakte/icons/dist/28/profile';
import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';

const BottomBar = ({id}) => {
    const [activeStory, setActiveStory] = useState(id);

    const changeActiveStory = (e) => {
        setActiveStory(e.currentTarget.dataset.story)
    }


    return (
        <Epic activeStory={activeStory} tabbar={
            <Tabbar>
              <TabbarItem
                onClick={changeActiveStory}
                selected={activeStory === 'gallery'}
                data-story="gallery"
              ><Icon28PictureOutline  /></TabbarItem>
              <TabbarItem
                onClick={changeActiveStory}
                selected={activeStory === 'map'}
                data-story="map"
              ><Icon28PlaceOutline /></TabbarItem>
              <TabbarItem
                onClick={changeActiveStory}
                selected={activeStory === 'profile'}
                data-story="profile"
              ><Icon28Profile /></TabbarItem>
            </Tabbar>
          }></Epic>
    )
}


export default BottomBar

