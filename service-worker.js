"use strict";var precacheConfig=[["/index.html","f6f0b87cc11e61fd92426230aa6309fe"],["/static/css/main.05ae91d8.css","e5f5b562056c4542bd98e2a7b5946212"],["/static/js/main.a90da6d8.js","0c06ff8cafc84a8115cb8492b2666a2b"],["/static/media/bar-tabs.ceadc86d.png","ceadc86da4ca665dd63f15796eaf36a3"],["/static/media/big_red.91ba7bfb.jpg","91ba7bfb7a9e5e3c717bb9c16901fae0"],["/static/media/dandyhacksgroup.b562f540.jpg","b562f5409ad822e414c95f8d7ef7c7ac"],["/static/media/photo1.39c75725.jpg","39c757255f54ff7615309f6897a42f8a"],["/static/media/photo2.7d18ac3d.jpg","7d18ac3d5334290cf7335e755901fc7c"],["/static/media/photo3.72bb8648.jpg","72bb8648f5d2c5e3402b4cafd46e8047"],["/static/media/photo4.93a5c74f.jpg","93a5c74ff7857674963e5f8441fa4cbe"],["/static/media/photo5.fbb094e9.jpg","fbb094e981c98d1196cc6718e9aff3e6"],["/static/media/photo6.491c8afd.jpg","491c8afdee17d727c99c2a5d15dff6ff"],["/static/media/photo7.7300694f.jpg","7300694fb9ab1072722aa2408597054a"],["/static/media/presentation.bcd7205c.jpg","bcd7205c6bbad4aa0e45eb1930e5a402"],["/static/media/square_map.6353b71a.png","6353b71ab5a15a08dce409702cbae120"],["/static/media/ubhacking1.1679e584.jpg","1679e5848bf271cc13b7ed4b989b8bf0"],["/static/media/ubhacking2.fa6fe8fe.jpg","fa6fe8fe9d767d6c5a0a944d64d674ad"],["/static/media/wip_logo.7fcb048d.png","7fcb048de7601118cc62ac0413e6126c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});