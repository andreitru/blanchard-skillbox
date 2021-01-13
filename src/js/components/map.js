import '../vendor/yandex-map';

export let myMap;

export function map(width) {
  deviceWidth = width;
  if (width < 1200) {
    myMap.behaviors.disable(['drag', 'rightMouseButtonMagnifier', 'scrollZoom']);
    myMap.controls.remove(geolocationControl);
    myMap.controls.remove(zoomControl);
  } else {
    myMap.behaviors.enable(['drag', 'rightMouseButtonMagnifier', 'scrollZoom']);
    myMap.controls.add(geolocationControl);
    myMap.controls.add(zoomControl);
  }
  changeCenter(width);
  myMap.setCenter(center);
}

let center = [55.764010351657944, 37.62781575946036];

let deviceWidth = document.body.clientWidth;

let geolocationControl;
let zoomControl;

function changeCenter(width) {
  if (width < 1200) {
    center = [55.764010351657944, 37.61];
  } else if (width < 768) {
    center = [55.764010351657944, 37.59];
  }
}

ymaps.ready(init);

function init() {

  changeCenter(deviceWidth);

  myMap = new ymaps.Map("map", {
    center: center,
    zoom: 14,
    controls: [],
  });

  var myPlacemark = new ymaps.Placemark([55.75838096631181, 37.601260090249916], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../../img/geomark.svg',
    iconImageSize: [20, 20],
  })

  geolocationControl = new ymaps.control.GeolocationControl({
    options: {
      position: {
        right: 15,
        top: 330
      },
    }
  });

  zoomControl = new ymaps.control.ZoomControl({
    options: {
      size: 'small',
      position: {
        right: 15,
        top: 260
      },
    },
  });

  myMap.geoObjects.add(myPlacemark);

  let isTablet = deviceWidth < 1200;

  if (isTablet) {
    myMap.behaviors.disable(['drag', 'rightMouseButtonMagnifier', 'scrollZoom']);
  } else if (!isTablet) {
    myMap.controls.add(geolocationControl);
    myMap.controls.add(zoomControl);
  }
}
