define(["wsbcore/helper","wsbcore/growl","common/util/util.window"],function(n){function o(n,o){t="js!//connect.facebook.net/"+n+"_"+o+"/sdk"}function c(n){n.forEach(function(n){n&&"function"==typeof n&&n()})}var t,e="en",i="US",u=!1,f=!1,r=[],s=[];return window.fbAsyncInit=function(){u=!0,c(r)},o(e,i),{setLocale:function(n,c){o(n,c)},processFBOperation:function(o,e){u?o():(r.push(o),s.push(e),f||(f=!0,n.require([t],function(){},function(){c(s)})))}}});
//# sourceMappingURL=util.fbSDKLoader.js.map
/*
     FILE ARCHIVED ON 22:35:51 Jan 13, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:32:23 Jan 07, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 289.864 (3)
  esindex: 0.006
  captures_list: 308.341
  CDXLines.iter: 12.867 (3)
  PetaboxLoader3.datanode: 319.001 (5)
  exclusion.robots: 0.277
  exclusion.robots.policy: 0.261
  RedisCDXSource: 1.588
  PetaboxLoader3.resolve: 1102.343 (2)
  load_resource: 1139.483
*/