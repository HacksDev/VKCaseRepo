import React from 'react';
import me from '../../img/me-pin.png'
import photograph from '../../img/photograph-pin.png'

const mapCenter = [55.755381, 37.619044];

let placemarks = [];

const setMe = () => {
    /* По-хорошему нужно определять геопозицию */
    const currentPosition = mapCenter

    placemarks.push(new window.ymaps.Placemark(currentPosition, null, {
        iconLayout: 'default#image',
        iconImageHref: me,
        iconImageSize: [34, 46],
        iconImageOffset: [-20, -20],
    }))
}

const setPhotographers = () => {
    for (var i = 0, l = 10; i < l; i++) {
        var placemark = new window.ymaps.Placemark(getRandomPosition(), null, {
            iconLayout: 'default#image',
            iconImageHref: photograph,
            iconImageSize: [34, 46],
            iconImageOffset: [-20, -20],
        });
        placemarks.push(placemark);
    }
}


const setCluster = (myMap) => {
    var clusterer = new window.ymaps.Clusterer({
        clusterDisableClickZoom: true,
    });

    setMe();
    setPhotographers();

    clusterer.add(placemarks);
    myMap.geoObjects.add(clusterer);
}


const getRandomPosition = () => {
    return [
        mapCenter[0] + (Math.random() * 0.6 - 0.3),
        mapCenter[1] + (Math.random() * 0.8 - 0.4)
    ];
}


const YMap = () => {

    if (window.isInit === undefined) {
        window.ymaps.ready(init);
        function init() {
            const myMap = new window.ymaps.Map("map", {
                center: mapCenter,
                zoom: 11,
                controls: []
            });

            setCluster(myMap);
            window.isInit = 1;
        }
    }



    return (
        <div id="map" style={{ width: "100%", height: "100vh", position: "absolute" }}></div>
    );
}

export default YMap;

