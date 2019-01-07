define([],function(){function t(t){this.model=t,(this.isKO=Boolean(t.ko))&&(this.ko=t.ko)}return t.prototype={get:function(t,i){return t?this.isKO&&!i&&this.ko.isObservable(this.model[t])?this.ko.toJS(this.model[t]()):this.model[t]:this.model},set:function(t,i){return t?this.isKO&&this.ko.isObservable(this.model[t])?this.model[t](i):this.model[t]=i:!1}},t});
//# sourceMappingURL=util.model.js.map
/*
     FILE ARCHIVED ON 22:35:49 Jan 13, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:48:10 Jan 07, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 91.83 (3)
  esindex: 0.012
  captures_list: 115.429
  CDXLines.iter: 15.401 (3)
  PetaboxLoader3.datanode: 116.207 (5)
  exclusion.robots: 0.261
  exclusion.robots.policy: 0.235
  RedisCDXSource: 2.478
  PetaboxLoader3.resolve: 35.279 (2)
  load_resource: 72.578
*/