define(["common/util/util.window"],function(e){var r=function(e){e=e.toLowerCase();var r=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||/(trident).*rv:([\d\.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:r[1]||"",version:r[2]||"0"}},o=r(e.navigator.userAgent),i={msie:!1,webkit:!1,opera:!1,mozilla:!1,safari:!1,chrome:!1,isIE7orLower:!1,isIE8orLower:!1,isIE9:!1,OS:e.navigator.platform,window:e};return i.isMacKeyboard=e.navigator&&-1!==String(e.navigator.appVersion).indexOf("Mac"),i.isWindowsKeyboard=!i.isMacKeyboard,"trident"===o.browser&&(o.browser="msie"),o.browser&&(i[o.browser]=!0,i.version=o.version),i.chrome?i.webkit=!0:i.webkit&&(i.safari=!0),i.majorVersion=parseInt(i.version),i.msie&&i.majorVersion<=7&&(i.isIE7orLower=!0),i.msie&&i.majorVersion<=8&&(i.isIE8orLower=!0),i.msie&&9===i.majorVersion&&(i.isIE9=!0),i});
//# sourceMappingURL=browser.js.map
/*
     FILE ARCHIVED ON 22:35:51 Jan 13, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:32:22 Jan 07, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 217.03 (3)
  esindex: 0.009
  captures_list: 235.427
  CDXLines.iter: 12.779 (3)
  PetaboxLoader3.datanode: 634.13 (5)
  exclusion.robots: 0.197
  exclusion.robots.policy: 0.18
  RedisCDXSource: 1.686
  PetaboxLoader3.resolve: 178.436 (2)
  load_resource: 604.092
*/