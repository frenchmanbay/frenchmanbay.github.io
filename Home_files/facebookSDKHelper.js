define(["jquery","designer/util/util.fbSDKLoader","common/util/util.window"],function(a,e,t){function r(a){t.FB.init({appId:a||"Feed-No-App-ID",xfbml:!0,version:p}),n=!(i=a?!0:!1)}function o(a){var e=t.FB;a.propertyTraversalArr&&a.propertyTraversalArr.forEach(function(a){e=e[a]}),e[a.methodName].apply(null,a.params)}var p="v2.8",n=!1,i=!1,d={"class":"fb-page","data-href":"http://web.archive.org/web/20180113223549/https://facebook.com/seeamazingplaces","data-width":180,"data-height":70,"data-hide-cover":!1,"data-show-facepile":!0,"data-show-posts":!0,"data-small-header":!1,"data-adapt-container-width":!0};return{setLocale:function(a,t){e.setLocale(a,t)},postFeeds:function(a,t,p,n,d){var s={methodName:"ui",params:[{method:"feed",name:a,display:"popup",link:t,picture:"",caption:t,description:p}]};e.processFBOperation(function(){i||r(n),o(s)},d)},likeBoxGenerator:function(t,p,i,s){var c,f={propertyTraversalArr:["XFBML"],methodName:"parse",params:[]};p?(p=a.isPlainObject(p)?p:JSON.parse(p),c=p):c=d;var l=a("<div>",p).append(a("<div>",{"class":"fb-xfbml-parse-ignore"}).append(a("<blockquote>",{cite:c["data-href"]})).append(a("<a>",{href:c["data-href"]})));l.appendTo(a(t)),e.processFBOperation(function(){n||r(),o(f),i&&"function"==typeof i&&i()},s)}}});
//# sourceMappingURL=facebookSDKHelper.js.map
/*
     FILE ARCHIVED ON 22:35:49 Jan 13, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:32:21 Jan 07, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 58.962 (3)
  esindex: 0.013
  captures_list: 85.071
  CDXLines.iter: 18.245 (3)
  PetaboxLoader3.datanode: 68.989 (5)
  exclusion.robots: 0.284
  exclusion.robots.policy: 0.263
  RedisCDXSource: 1.858
  PetaboxLoader3.resolve: 107.319 (2)
  load_resource: 231.949
*/