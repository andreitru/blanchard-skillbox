import '../vendor/yandex-map';

ymaps.ready(init);

function init() {
  let center = [55.764010351657944, 37.62781575946036];
  if (document.body.clientWidth < 1200) {
    center = [55.764010351657944, 37.61];
  } else if (document.body.clientWidth < 768) {
    center = [55.764010351657944, 37.59];
  }

  var myMap = new ymaps.Map("map", {
    center: center,
    zoom: 14,
    controls: [],
  });

  var myPlacemark = new ymaps.Placemark([55.75838096631181, 37.601260090249916], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../../img/geomark.svg',
    iconImageSize: [20, 20],
  })

  let isTablet = document.body.clientWidth > 1024;

  var geolocationControl = new ymaps.control.GeolocationControl({
    options: {
      position: {
        right: 15,
        top: 330
      },
      visible: isTablet
    }
  })

  var zoomControl = new ymaps.control.ZoomControl({
    options: {
      size: 'small',
      position: {
        right: 15,
        top: 260
      },
      visible: isTablet
    },
  });

  myMap.controls.add(geolocationControl);
  myMap.controls.add(zoomControl);
  myMap.geoObjects.add(myPlacemark);
}
