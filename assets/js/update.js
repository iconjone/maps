function forceUpdate(){

const PRECACHE_URLS = [
  'index.html',
  './', // Alias for index.html
  'manifest.json',
  'assets/img/apple-touch-icon.png',
  'assets/img/favicon-32x32.png',
  'assets/img/favicon-16x16.png',
  'assets/img/android-chrome-192x192.png',
  'assets/img/crosshair.svg',
  'assets/img/ios-share.png',
  'assets/vendor/framework7-3.6.3/css/framework7.min.css',
  'assets/vendor/openlayers-5.3.0/ol.css',
  'assets/css/app.css',
  'assets/fonts/MaterialIcons-Regular.woff2',
  'assets/vendor/framework7-3.6.3/js/framework7.min.js',
  'assets/vendor/localForage-1.7.3/localforage.min.js',
  'assets/vendor/openlayers-5.3.0/ol.js',
  'assets/vendor/proj4js-2.5.0/proj4.js',
  'assets/js/app.js'
];

caches.keys().then(function(PRECACHE_URLS) {
    for (let name of PRECACHE_URLS)
        caches.delete(name);
});

location.reload();

}
