import React from 'react';
import me from '../../img/me-pin.svg'
import photograph from '../../img/photograph-pin.svg'
import client from '../../img/client-pin.svg'

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

const setMainPins = (openModal) => {
    for (var i = 0, l = 10; i < l; i++) {
        var placemark = new window.ymaps.Placemark(getRandomPosition(), null, {
            iconLayout: 'default#image',
            iconImageHref: window.role === "model" ? photograph : client,
            iconImageSize: [48, 53],
            iconImageOffset: [-20, -20],
        });
        placemarks.push(placemark);
    }
}


const setCluster = (myMap, openModal) => {
    var clusterer = new window.ymaps.Clusterer({
        clusterDisableClickZoom: false,
    });

    if (!(placemarks.length > 0)) {
        setMe();
        setMainPins(openModal);
    }

    placemarks.forEach(placemark => {
        placemark.events.add('click', function () {
            openModal();
        });
    })



    clusterer.add(placemarks);
    myMap.geoObjects.add(clusterer);
}


const getRandomPosition = () => {
    return [
        mapCenter[0] + (Math.random() * 0.3 - 0.15),
        mapCenter[1] + (Math.random() * 0.4 - 0.2)
    ];
}


const YMap = ({ openModal }) => {

    if (document.querySelectorAll("#map > ymaps").length === 0) {
        window.ymaps.ready(init);
        function init() {
            const myMap = new window.ymaps.Map("map", {
                center: mapCenter,
                zoom: 11,
                controls: []
            });

            setCluster(myMap, openModal);
        }
    }



    return (
        <div id="map"></div>
    );
}

export default YMap;

