define(["common/util/util.window"],function(e){function o(e){if(t.cookie.length>0){var o=t.cookie.indexOf(e+"=");if(-1!==o){o=o+e.length+1;var n=t.cookie.indexOf(";",o);return-1===n&&(n=t.cookie.length),unescape(t.cookie.substring(o,n))}}return""}function n(e,o,n){var i=new Date;n&&i.setDate(i.getDate()+n);var r=e+"="+escape(o)+((null===n||"undefined"==typeof n?"":"; expires="+i.toUTCString())+"; path=/");t.cookie=r}function i(e){n(e,"",-1)}var t=e.document;return{getCookie:o,setCookie:n,eraseCookie:i}});
//# sourceMappingURL=cookiemanager.js.map
/*
     FILE ARCHIVED ON 22:35:47 Jan 13, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:32:20 Jan 07, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 52.402 (3)
  esindex: 0.008
  captures_list: 74.594
  CDXLines.iter: 15.424 (3)
  PetaboxLoader3.datanode: 74.098 (5)
  exclusion.robots: 0.175
  exclusion.robots.policy: 0.163
  RedisCDXSource: 1.508
  PetaboxLoader3.resolve: 61.177 (2)
  load_resource: 405.39
*/