/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "425857340850b6ef5064b77c71ec60a3"
  },
  {
    "url": "advanced/cross-field-validation.html",
    "revision": "bae9c07f9f1c4281d9a5a33a1192dd38"
  },
  {
    "url": "advanced/dynamic-rules.html",
    "revision": "432b25724e056cff8ef7bea7b74bd122"
  },
  {
    "url": "advanced/file-validation.html",
    "revision": "4ce530f22db4c1af17d82334c2f1f099"
  },
  {
    "url": "advanced/programmatic-validation.html",
    "revision": "565ff1279a725e7b379861fe8b2aef74"
  },
  {
    "url": "advanced/refactoring-forms.html",
    "revision": "7ef8ecc522a2009b4d627b12faa75553"
  },
  {
    "url": "advanced/rules-object-expression.html",
    "revision": "b16756ecb44ee788791f88f203139bdb"
  },
  {
    "url": "advanced/server-side-validation.html",
    "revision": "6e2660b2979e5e29405221e2bdcd512d"
  },
  {
    "url": "advanced/testing.html",
    "revision": "16b5eaef0ffa895d88d04ed8720506fc"
  },
  {
    "url": "api/extend.html",
    "revision": "07e89a26b93074673c121a0db7cfc8f2"
  },
  {
    "url": "api/validate.html",
    "revision": "885c55231fcb99569d5cc002a350cd92"
  },
  {
    "url": "api/validation-observer.html",
    "revision": "e510ab006967a89987c61bb3ec57681d"
  },
  {
    "url": "api/validation-provider.html",
    "revision": "e5631367e0b7ac628a66465697c3a19d"
  },
  {
    "url": "api/with-validation.html",
    "revision": "f4c02a28b982aa7f0a95ac705b21dff8"
  },
  {
    "url": "assets/css/0.styles.5b0e82e3.css",
    "revision": "263b6731b7c796fa92b3368bc8a7a968"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ca6f7288.js",
    "revision": "f12b44e7347858afe02e0233c5fa66e5"
  },
  {
    "url": "assets/js/11.90cac68b.js",
    "revision": "b99b447a0abb8f8dc0ba1f88a0fc3937"
  },
  {
    "url": "assets/js/12.2c671d44.js",
    "revision": "6206f4fd2e76fbfceda4b04ad93a3532"
  },
  {
    "url": "assets/js/13.0f4fd9e3.js",
    "revision": "35180e2c5449507a14074366c3274c8b"
  },
  {
    "url": "assets/js/14.e36db57d.js",
    "revision": "2d2662b6196f794ad339908baeab38e3"
  },
  {
    "url": "assets/js/15.5d5259e2.js",
    "revision": "86b3616de540ec44200de1a2d59a6fc8"
  },
  {
    "url": "assets/js/16.aea9826e.js",
    "revision": "acb5b5ba783d082fe713b44f04e58bf1"
  },
  {
    "url": "assets/js/17.e1003e1a.js",
    "revision": "13c858021207f6ae344d75ce4c9f814a"
  },
  {
    "url": "assets/js/18.06e6705d.js",
    "revision": "70da81eae41398d77fe60a3394d49f35"
  },
  {
    "url": "assets/js/19.a97eb331.js",
    "revision": "fcbe3a688fab6b32bc99e98189d025fd"
  },
  {
    "url": "assets/js/2.4336777f.js",
    "revision": "3f6bff58d003600ec17f96daf917cb92"
  },
  {
    "url": "assets/js/20.867434cd.js",
    "revision": "629cfd5e7edf2558ab17a6ba2d57729c"
  },
  {
    "url": "assets/js/21.7b567447.js",
    "revision": "38c0abb7146d875ab589752d6d976228"
  },
  {
    "url": "assets/js/22.bb2bc53e.js",
    "revision": "7f686c4c07f55d9bca5c641638227209"
  },
  {
    "url": "assets/js/23.7aa4d559.js",
    "revision": "b9b04e587db3c9705b726b4298683eca"
  },
  {
    "url": "assets/js/24.e87e6f16.js",
    "revision": "e602cf4dd6c275b3571987c34e54c80c"
  },
  {
    "url": "assets/js/25.3ed5ad18.js",
    "revision": "783ccc9fd8808b58bfe44785f471a854"
  },
  {
    "url": "assets/js/26.3c707e74.js",
    "revision": "eafa35c7fc106174ff3dcf7669252f82"
  },
  {
    "url": "assets/js/27.f4560978.js",
    "revision": "8443d9365b5613e99e188a86e40223c1"
  },
  {
    "url": "assets/js/28.0a9cc0db.js",
    "revision": "37cf72b594cb35543b5dde43f43c20c3"
  },
  {
    "url": "assets/js/29.33735a35.js",
    "revision": "8a557219b26a9f7b054fb7b6b565a8d0"
  },
  {
    "url": "assets/js/3.69830f24.js",
    "revision": "1a7dfec4664b96f148ad54e2bd4ef1b2"
  },
  {
    "url": "assets/js/30.dd6b8a4a.js",
    "revision": "52645376a184d8ff9d5f53f4de6ad2d2"
  },
  {
    "url": "assets/js/31.7deef822.js",
    "revision": "def3ee553f41dbd6b4566a1259a9c544"
  },
  {
    "url": "assets/js/32.37d34246.js",
    "revision": "1fdc01ed29e4273d27e88b6fbaec2852"
  },
  {
    "url": "assets/js/33.70b5497b.js",
    "revision": "a3d45808df480d13f3650150f28036e9"
  },
  {
    "url": "assets/js/34.5f58f542.js",
    "revision": "aee4365667baac923ba8ec4d33511d42"
  },
  {
    "url": "assets/js/35.765982ba.js",
    "revision": "a3dc92861abf36259b8c511e52de484d"
  },
  {
    "url": "assets/js/36.e0931cdc.js",
    "revision": "cfbdbce57bb9bf8b798a43f750867426"
  },
  {
    "url": "assets/js/37.afca7935.js",
    "revision": "86e64208a8d65efd89fc6ebfa34f1a66"
  },
  {
    "url": "assets/js/38.541ef668.js",
    "revision": "e4cb6f4143f040551a80babb4264ef1d"
  },
  {
    "url": "assets/js/39.ef40c0c0.js",
    "revision": "ea4e6aaa5b2870c6868d493372b76786"
  },
  {
    "url": "assets/js/4.e73ec34e.js",
    "revision": "555a20441f8d57ed1cfa1df063e6438c"
  },
  {
    "url": "assets/js/40.458789b5.js",
    "revision": "e645867fb12c01cf933d212740838db2"
  },
  {
    "url": "assets/js/41.ed257a5e.js",
    "revision": "d5759c7142197c04a4bcf798d488b953"
  },
  {
    "url": "assets/js/42.162c6769.js",
    "revision": "806defe7f363dbb1a56d94bff135dc55"
  },
  {
    "url": "assets/js/43.acc28f1c.js",
    "revision": "08bdc05eefc97ca878e73c8976c5e5b3"
  },
  {
    "url": "assets/js/44.1db689d2.js",
    "revision": "177baa9951089bc6fcc246e2e514381f"
  },
  {
    "url": "assets/js/45.1b83fbc3.js",
    "revision": "e9dd63e565e15da4d8daf7a1c78f6433"
  },
  {
    "url": "assets/js/46.77a09def.js",
    "revision": "4721c17e5550c4f94573d26c40caa589"
  },
  {
    "url": "assets/js/47.8868e871.js",
    "revision": "4a9a61190427baa6b8b6ca9a470aec47"
  },
  {
    "url": "assets/js/48.166b5b8a.js",
    "revision": "64e4ca7591a64db5b08a1b48ab243374"
  },
  {
    "url": "assets/js/49.0481223c.js",
    "revision": "d4525dba24d5a8814e32943b7193d6b7"
  },
  {
    "url": "assets/js/5.3bbc9302.js",
    "revision": "266393ef57c0c960c80a0483a3275a87"
  },
  {
    "url": "assets/js/50.ec5ff814.js",
    "revision": "dddc9ac5f3fecaa86a456758529dd004"
  },
  {
    "url": "assets/js/51.bfb1d666.js",
    "revision": "1a20ce022d3b46f533a6ff71d6927f5e"
  },
  {
    "url": "assets/js/52.c05f11a6.js",
    "revision": "7636a5352b631c98f28ee9ddc21ab604"
  },
  {
    "url": "assets/js/53.05e9db53.js",
    "revision": "660fb2dcee63b0f39d9c1cce0a6b06f2"
  },
  {
    "url": "assets/js/54.8a8fb6df.js",
    "revision": "eb9c788101b55104bdad794286154be3"
  },
  {
    "url": "assets/js/55.bda1aeab.js",
    "revision": "7fb8af206bea51a985d4466f4d1870bd"
  },
  {
    "url": "assets/js/56.4f7d3a6f.js",
    "revision": "e9c0d511bdc75f5d3a1d5e3f37b98cb5"
  },
  {
    "url": "assets/js/57.6d94f937.js",
    "revision": "84096022117090332340a1f97af1be85"
  },
  {
    "url": "assets/js/58.e43031ad.js",
    "revision": "f57a65987455cdba577e1178a5c39e0a"
  },
  {
    "url": "assets/js/59.11112623.js",
    "revision": "585a8cecd9d504da5d31051cb4f6488f"
  },
  {
    "url": "assets/js/6.42dfa859.js",
    "revision": "c22a3b9482d0dfd22f398079ab2fdeaf"
  },
  {
    "url": "assets/js/60.cb391971.js",
    "revision": "7e2c34999aa8513d13e6954b7ebe1bab"
  },
  {
    "url": "assets/js/61.1b5a8afe.js",
    "revision": "ee9bce99488f7ceb4be13489dd1d3737"
  },
  {
    "url": "assets/js/62.220794d2.js",
    "revision": "3a3723072368eb198bd5772828edd0c6"
  },
  {
    "url": "assets/js/63.b3317cea.js",
    "revision": "456472e8e8bd636c6c36da6589e74456"
  },
  {
    "url": "assets/js/64.a05aaf90.js",
    "revision": "60f604ffe418c64d4abc184cd1b26889"
  },
  {
    "url": "assets/js/7.b5949841.js",
    "revision": "8acffb473a608e1cdc0fcc5dc8fcb35a"
  },
  {
    "url": "assets/js/8.c56e71b8.js",
    "revision": "6d1926307242a3fecb702d45ca351ea5"
  },
  {
    "url": "assets/js/9.0a8de845.js",
    "revision": "568c827326cdc20c100cd57c2b00aaff"
  },
  {
    "url": "assets/js/app.26eac9a8.js",
    "revision": "9d405fcbbd2f350ef3a276132a6d473e"
  },
  {
    "url": "assets/js/vendors~docsearch.f0e5814f.js",
    "revision": "c0c7c2c8e9f8fdb0fec30741bd8c6916"
  },
  {
    "url": "configuration.html",
    "revision": "973e624b9c42e94f4b3cea88db326fe0"
  },
  {
    "url": "guide/3rd-party-libraries.html",
    "revision": "f7e6a9bf77f18dfe94d85f456f16d759"
  },
  {
    "url": "guide/basics.html",
    "revision": "5d92c471cf41f24e4f4e70db71ed9434"
  },
  {
    "url": "guide/forms.html",
    "revision": "62f6fabf1dc116da56e508e16e70df10"
  },
  {
    "url": "guide/interaction-and-ux.html",
    "revision": "585f234344205e2a6d3e7713dd89c9d8"
  },
  {
    "url": "guide/localization.html",
    "revision": "466087feeacd30db39512ace6151183b"
  },
  {
    "url": "guide/required-fields.html",
    "revision": "43295c5abfdc17d0e9ba260825a4d4ae"
  },
  {
    "url": "guide/rules.html",
    "revision": "04f6a3307cdc625c983f55bb3b5f8241"
  },
  {
    "url": "guide/state.html",
    "revision": "674c1cf65f67180eb41f2e1284aa8da8"
  },
  {
    "url": "img/android-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/android-icon-192x192.png",
    "revision": "749eb7570911aa13fa7a305f7dfdb042"
  },
  {
    "url": "img/android-icon-36x36.png",
    "revision": "94d70fb19e77b88129a2a4b44d30273f"
  },
  {
    "url": "img/android-icon-48x48.png",
    "revision": "6e039016a0d1721277e863e6400107a9"
  },
  {
    "url": "img/android-icon-72x72.png",
    "revision": "cf3bbf6c5c50306cb1d2af34148fd4ad"
  },
  {
    "url": "img/android-icon-96x96.png",
    "revision": "171c58f6d99812028cdc433f706fab88"
  },
  {
    "url": "img/apple-icon-114x114.png",
    "revision": "a1612722a53e36417890844f4aaca4bd"
  },
  {
    "url": "img/apple-icon-120x120.png",
    "revision": "0fdcdb4e43499467315916e07d5a09e0"
  },
  {
    "url": "img/apple-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/apple-icon-152x152.png",
    "revision": "bdd5fb6d3e9976d4b66199750e7398a0"
  },
  {
    "url": "img/apple-icon-180x180.png",
    "revision": "6e4bfb481a5f5546673674ea2f53a80d"
  },
  {
    "url": "img/apple-icon-57x57.png",
    "revision": "2a3e81c26413d7cfb085132e4d0d78ed"
  },
  {
    "url": "img/apple-icon-60x60.png",
    "revision": "f3f63dae941a269726cecb63d5eb8ae4"
  },
  {
    "url": "img/apple-icon-72x72.png",
    "revision": "cf3bbf6c5c50306cb1d2af34148fd4ad"
  },
  {
    "url": "img/apple-icon-76x76.png",
    "revision": "8df9e1335515138c89abe7489d3331ee"
  },
  {
    "url": "img/apple-icon-precomposed.png",
    "revision": "0ae26495c87bea19c3238efac57100db"
  },
  {
    "url": "img/apple-icon.png",
    "revision": "0ae26495c87bea19c3238efac57100db"
  },
  {
    "url": "img/favicon-16x16.png",
    "revision": "50325b55b6decbf164f49e8ab2ef3a82"
  },
  {
    "url": "img/favicon-32x32.png",
    "revision": "7d8244cb1190e5818aaf3b5bc7dbe523"
  },
  {
    "url": "img/favicon-96x96.png",
    "revision": "171c58f6d99812028cdc433f706fab88"
  },
  {
    "url": "img/ms-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/ms-icon-150x150.png",
    "revision": "868ea201b8975a3f505a31992da8bf60"
  },
  {
    "url": "img/ms-icon-310x310.png",
    "revision": "635b0545d3369a88a7a3238089a38853"
  },
  {
    "url": "img/ms-icon-70x70.png",
    "revision": "476a4d57938b8a33701124593cb2301b"
  },
  {
    "url": "index.html",
    "revision": "e5ce63f62aa103355eee90162449a8fc"
  },
  {
    "url": "logo.svg",
    "revision": "851182946aa8e35268efa9a9ccd410d2"
  },
  {
    "url": "migration.html",
    "revision": "1fd6236151dfe33aafb26d60111bb830"
  },
  {
    "url": "overview.html",
    "revision": "83c05db45b9dcb6272221b0b54e3842e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
